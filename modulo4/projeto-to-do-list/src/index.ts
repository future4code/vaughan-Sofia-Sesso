import express, { Request, Response } from 'express'
import cors from 'cors'
import { connection } from './connection'
import { AddressInfo } from 'net'

const app = express()

app.use(express.json())
app.use(cors())

// Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const userId: string = req.params.id

        const result = await connection("Users")
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

            res.status(200).send(`Usuário ${nickname} atualizado com sucesso`)
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

        const result = await connection("Tasks")
            .select('Tasks.id', 'title', 'deadline', 'status', 'description', 'creator_id', 'nickname')
            .join('Users', { 'Users.id': 'Tasks.creator_id' })
            .where('Tasks.id', taskId)

        if (!result[0]) {
            errorCode = 404
            throw new Error(`Task com id ${taskId} não encontrada`)
        } else {
            const resultWithFixedDate = {
                ...result[0],
                deadline: covertDateToDDMMYYYY(result[0].deadline)
            }

            res.status(200).send(resultWithFixedDate)
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