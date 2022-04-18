import express, { Request, Response } from 'express'
import cors from 'cors'
import { connection } from './connection'
import { AddressInfo } from 'net'

const app = express()

app.use(express.json())
app.use(cors())

// Pegar todos os usuários
app.get("/user/all", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const result = await connection("Users")
            .select('id', 'nickname')

        res.status(200).send({ users: result })
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Pesquisar usuário
app.get("/user", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const query: string = String(req.query.query)

        if (!query) {
            errorCode = 422
            throw new Error("Busca do nome do usuário não enviada")
        } else {
            const result = await connection("Users")
                .select('id', 'nickname')
                .where('nickname', 'like', `%${query}%`)
                .orWhere('email', 'like', `%${query}%`)

            res.status(200).send({ users: result })
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const userId: string = req.params.id

        const result = await connection("Users")
            .select('id', 'nickname')
            .where({ id: userId })

        if (!result[0]) {
            errorCode = 404
            throw new Error(`Usuário com id ${userId} não encontrado`)
        } else {
            res.status(200).send({ user: result[0] })
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Criar usuário
app.post("/user", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            await connection("Users")
                .insert({
                    id: Date.now().toString(),
                    name,
                    nickname,
                    email
                })
        }

        res.status(201).send(`Usuário ${nickname} criado com sucesso!`)
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Editar usuário
app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const userId: string = req.params.id
        const { name, nickname, email } = req.body

        if (name === "" || nickname === "" || email === "") {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            await connection("Users")
                .update({ name, nickname, email })
                .where({ id: userId })

            res.status(200).send(`Usuário ${nickname} atualizado com sucesso!`)
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Pegar tarefas criadas por um usuário / Pegar todas as tarefas por status / Procurar tarefa por termos
app.get("/task", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const creatorId: string = String(req.query.creatorUserId)
        const status: string = String(req.query.status)
        const query: string = String(req.query.query)

        if (!creatorId && !status && !query) {
            errorCode = 422
            throw new Error("Nenhuma query foi enviada")
        } else if (creatorId) {
            const result = await connection("Tasks")
                .select(
                    'Tasks.id as taskId',
                    'title',
                    'deadline',
                    'status',
                    'description',
                    'creator_id as creatorUserId',
                    'nickname as creatorUserNickname'
                )
                .join('Users', { 'Users.id': 'Tasks.creator_id' })
                .where({ creator_id: creatorId })

            if (result.length === 0) {
                res.status(404).send({ tasks: [] })
            } else {
                const resultWithFixedDate = result.map((task) => {
                    return {
                        ...task,
                        deadline: covertDateToDDMMYYYY(task.deadline)
                    }
                })

                res.status(200).send({ tasks: resultWithFixedDate })
            }
        } else if (status === "done" || status === "to_do" || status === "doing") {
            const result = await connection("Tasks")
                .select(
                    'Tasks.id as taskId',
                    'title',
                    'deadline',
                    'description',
                    'creator_id as creatorUserId',
                    'nickname as creatorUserNickname'
                )
                .join('Users', { 'Users.id': 'Tasks.creator_id' })
                .where({ status })

            if (result.length === 0) {
                res.status(404).send({ tasks: [] })
            } else {
                const resultWithFixedDate = result.map((task) => {
                    return {
                        ...task,
                        deadline: covertDateToDDMMYYYY(task.deadline)
                    }
                })

                res.status(200).send({ tasks: resultWithFixedDate })
            }
        } else if (status !== "done" && status !== "to_do" && status !== "doing") {
            errorCode = 422
            throw new Error("Status inválido")
        } else if (query) {
            const result = await connection("Tasks")
                .select(
                    'Tasks.id as taskId',
                    'title',
                    'deadline',
                    'description',
                    'creator_id as creatorUserId',
                    'nickname as creatorUserNickname'
                )
                .join('Users', { 'Users.id': 'Tasks.creator_id' })
                .where('title', 'like', `%${query}%`)
                .orWhere('description', 'like', `%${query}%`)

            if (result.length === 0) {
                res.status(404).send({ tasks: [] })
            } else {
                const resultWithFixedDate = result.map((task) => {
                    return {
                        ...task,
                        deadline: covertDateToDDMMYYYY(task.deadline)
                    }
                })

                res.status(200).send({ tasks: resultWithFixedDate })
            }
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Pegar todas as tarefas atrasadas
app.get("/task/delayed", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const currentDate = new Date().toISOString()

        const result = await connection("Tasks")
            .select(
                'Tasks.id as taskId',
                'title',
                'deadline',
                'description',
                'creator_id as creatorUserId',
                'nickname as creatorUserNickname',
            )
            .join('Users', { 'Users.id': 'creator_id' })
            .where('deadline', '<', `${currentDate}`)
            .andWhere('status', '<>', 'done')

        if (result.length === 0) {
            res.status(404).send({ tasks: [] })
        } else {
            const newResult = result.map((task) => {
                return {
                    ...task,
                    deadline: covertDateToDDMMYYYY(task.deadline)
                }
            })

            res.status(200).send({ tasks: newResult })
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const taskId: string = req.params.id

        if (taskId) {
            const result = await connection("Tasks")
                .select(
                    'Tasks.id as taskId',
                    'title',
                    'deadline',
                    'status',
                    'description',
                    'creator_id as creatorUserId',
                    'nickname as creatorUserNickname',
                )
                .join('Users', { 'Users.id': 'Tasks.creator_id' })
                .where('Tasks.id', taskId)

            const responsibleUsers = await connection("Tasks")
                .select('user_id as id', 'nickname')
                .join('ToDoList', { 'Tasks.id': 'task_id' })
                .join('Users', { 'Users.id': 'user_id' })
                .where('Tasks.id', taskId)

            if (!result[0]) {
                errorCode = 404
                throw new Error(`Task com id ${taskId} não encontrada`)
            } else {
                const newResult = {
                    ...result[0],
                    deadline: covertDateToDDMMYYYY(result[0].deadline),
                    responsibleUsers
                }

                res.status(200).send({ task: newResult })
            }
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Pegar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const taskId: string = req.params.id

        if (taskId) {
            const result = await connection("ToDoList")
                .select('user_id as id', 'nickname')
                .join('Users', { 'Users.id': 'user_id' })
                .where({ task_id: taskId })

            if (result.length === 0) {
                errorCode = 404
                throw new Error(`Tarefa com id ${taskId} não encontrada`)
            } else {
                res.status(200).send({ users: result })
            }
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Criar tarefa
app.post("/task", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { title, description, deadline, creatorId } = req.body

        if (!title || !description || !deadline || !creatorId) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            await connection("Tasks")
                .insert({
                    id: Date.now().toString(),
                    title,
                    description,
                    deadline: covertDateToYYYYMMDD(deadline),
                    creator_id: creatorId
                })

            res.status(201).send("Tarefa criada com sucesso!")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Atribuir um usuário responsável a uma tarefa / Atribuir mais de um responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { taskId, responsibleUserIds } = req.body

        if (!taskId || responsibleUserIds.length === 0) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            for (let i: number = 0; i < responsibleUserIds.length; i++) {
                const result = await connection("Users")
                    .where({ id: responsibleUserIds[i] })

                if (result.length === 0) {
                    errorCode = 404
                    throw new Error("Usuário(s) não encontrado")
                } else {
                    await connection("ToDoList")
                        .insert({
                            task_id: taskId,
                            user_id: responsibleUserIds[i]
                        })
                }
            }
            res.status(201).send(`Usuário(s) atribuído(s) à tarefa de id ${taskId} com sucesso!`)
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Atualizar o status da tarefa pelo id / Atualizar o status de várias tarefas
app.put("/task/status/edit", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const taskIds: string = req.body.taskIds
        const status: string = req.body.status

        if (taskIds.length === 0 || !status) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else if (taskIds && status) {
            for (let i: number = 0; i < taskIds.length; i++) {
                const result = await connection("Tasks")
                    .where({ id: taskIds[i] })

                if (result.length === 0) {
                    errorCode = 404
                    throw new Error("Tarefa(s) não encontrada")
                } else {
                    await connection("Tasks")
                        .update({ status })
                        .where({ id: taskIds[i] })

                }
            }
            res.status(200).send("Status da(s) tarefa(s) atualizado com sucesso!")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Deletar usuário
app.delete("/user/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const userId = req.params.id

        if (!userId) {
            errorCode = 422
            throw new Error("Id do usuário não enviado")
        } else {
            const result = await connection("Users")
                .where({ id: userId })

            if (result.length === 0) {
                errorCode = 404
                throw new Error("Usuário não encontrado")
            } else {
                await connection("ToDoList")
                    .delete()
                    .where({ user_id: userId })

                await connection("Tasks")
                    .delete()
                    .where({ creator_id: userId })

                await connection("Users")
                    .delete()
                    .where({ id: userId })

                res.status(200).send("Usuário deletado com sucesso!")
            }
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Deletar tarefa
app.delete("/task/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const taskId = req.params.id

        if (!taskId) {
            errorCode = 422
            throw new Error("Id da tarefa não enviado")
        } else {
            const result = await connection("Tasks")
                .where({ id: taskId })

            if (result.length === 0) {
                errorCode = 404
                throw new Error("Tarefa não encontrada")
            } else {
                await connection("ToDoList")
                    .delete()
                    .where({ task_id: taskId })

                await connection("Tasks")
                    .delete()
                    .where({ id: taskId })

                res.status(200).send("Tarefa deletada com sucesso!")
            }
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

// Retirar um usuário responsável de uma tarefa
app.delete("/task/:taskId/responsible/:responsibleUserId", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const taskId: string = req.params.taskId
        const responsibleUserId: string = req.params.responsibleUserId

        if (!taskId || !responsibleUserId) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            const resultTaskId = await connection("ToDoList")
                .where({ task_id: taskId })

            const resultResponsibleUserId = await connection("ToDoList")
                .where({ user_id: responsibleUserId })

            const resultTaskAndUser = await connection("ToDoList")
                .where({ task_id: taskId })
                .andWhere({ user_id: responsibleUserId })

            if (resultTaskId.length === 0) {
                errorCode = 404
                throw new Error("Tarefa não encontrada")
            } else if (resultResponsibleUserId.length === 0) {
                errorCode = 404
                throw new Error("Usuário não encontrado")
            } else if (resultTaskAndUser) {
                errorCode = 404
                throw new Error("Esta tarefa não tem esse usuário como responsável")
            } else {
                await connection("ToDoList")
                    .delete()
                    .where({ task_id: taskId })
                    .andWhere({ user_id: responsibleUserId })

                res.status(200).send("Usuário retirado da tarefa")
            }
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.sqlMessage || err.message)
    }
})

const covertDateToYYYYMMDD = (date: string): string => {
    const dd = date.slice(0, 2)
    const mm = date.slice(3, 5)
    const yyyy = date.slice(6)

    const newDate = `${yyyy}-${mm}-${dd}`

    return newDate
}

const covertDateToDDMMYYYY = (date: object): string => {
    const stringDate = JSON.stringify(date)

    const dd = stringDate.slice(9, 11)
    const mm = stringDate.slice(6, 8)
    const yyyy = stringDate.slice(1, 5)

    const newDate = `${dd}/${mm}/${yyyy}`

    return newDate
}

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server running on http://localhost:${address.port}`)
    } else {
        console.error("Failure upon starting server.")
    }
})