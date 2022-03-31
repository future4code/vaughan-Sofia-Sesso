import express, { request, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { User, users } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1:
// a) Devo utilizar o método GET.
// b) Como "/users", pois queremos visualizar todos os usuários.

// Exercício 3:
// a) O tipo de parâmetro usado aqui é o query parameter.

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const searchedName: string = String(req.query.name).toLowerCase()

        const verifyName: boolean = users.some((user: User) => {
            if (user.name.toLowerCase() === searchedName) {
                return true
            }
        })

        if (searchedName) {
            if (verifyName) {
                const userBySearchedName = users.filter((user: User) => {
                    return user.name.toLowerCase() === searchedName
                })

                res.status(200).send(userBySearchedName)
            } else {
                errorCode = 404
                throw new Error("Usuário não encontrado")
            }
        } else {
            res.status(200).send(users)
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// Exercício 2:
// a) Passei o type como um path parameter, porque estou buscando por um tipo de usuário específico.
// b) Sim, eu coloquei uma condicional para enviar um erro ao usuário se ele enviar algum type não válido, e para buscar
// os usuários do type enviado se esse type for válido.

app.get("/users/:type", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {

        const type: string = String(req.params.type).toUpperCase()

        if (type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 422
            throw new Error("Campo 'type' inválido")
        } else {
            const usersListByType: User[] = users.filter((user: User) => {
                return user.type.toUpperCase() === type
            })

            res.status(200).send(usersListByType)
        }

    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }

})

// Exercício 4:
// a) O que mudou foi que o método put precisaria de algum identificador dos usuários para poder alterá-los, que pode ser opcional, pois sem
// identificar algum usuário já existente, ele criaria um usuário novo.
// b) Sim, pois ele pode ser usado tanto para editar um elemento, quanto para criar um elemento novo.

app.post("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const { name, email, type, age } = req.body

        const newUser: User = {
            id: Date.now(),
            name,
            email,
            type,
            age
        }

        if (typeof age === 'number' && age <= 0) {
            errorCode = 422
            throw new Error("Campo 'age' tem que ser maior do que zero")
        } else if (!name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Um dos campos está vazio")
        } else if (typeof name !== 'string' || typeof email !== 'string' || (type !== "NORMAL" && type !== "ADMIN") || typeof age !== 'number') {
            errorCode = 422
            throw new Error("Um dos campos está inválido")
        } else {
            const updatedUsersList: User[] = [...users, newUser]

            res.status(201).send("Usuário criado com sucesso!")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }

})

// Exercício 5:
app.put("/users/", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const { name, email, type, age } = req.body
        const currentUser: User = users[users.length - 1]
        const newUser: User = {
            id: users[users.length - 1].id,
            name: name + "-ALTERADO",
            email,
            type,
            age
        }

        if (currentUser.name === (name + "-ALTERADO") && currentUser.email === email
            && currentUser.type === type && currentUser.age === age) {
            errorCode = 409
            throw new Error("Usuário já foi alterado")
        } else {
            const lastUserUpdated = users.map((user: User, index: number) => {
                if (index === users.length - 1) {
                    return newUser
                } else {
                    return { ...user }
                }
            })

            res.status(200).end()
        }

    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// Exercício 6:
app.patch("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const { name, email, type, age } = req.body
        const currentUser: User = users[users.length - 1]

        let newUser: User

        if (typeof name === 'string' && (name + "-ALTERADO") !== currentUser.name) {

            newUser = { ...currentUser, name: name + "-REALTERADO" }

        } else if (typeof email === 'string' && email !== currentUser.email) {

            newUser = { ...currentUser, name: currentUser.name.replace("ALTERADO", "REALTERADO"), email }

        } else if ((type === "ADMIN" && currentUser.type === "NORMAL") || (type === "NORMAL" && currentUser.type === "ADMIN")) {

            newUser = { ...currentUser, name: currentUser.name.replace("ALTERADO", "REALTERADO"), type }

        } else if (typeof age === 'number' && age > 0 && age !== currentUser.age) {

            newUser = { ...currentUser, name: currentUser.name.replace("ALTERADO", "REALTERADO"), age }

        } else if ((name + "-ALTERADO") === currentUser.name || email === currentUser.email || type === currentUser.type || age === currentUser.age) {

            errorCode = 409
            throw new Error("Campo preeenchido já existente")

        } else {

            errorCode = 422
            throw new Error("Campo inválido")

        }

        if (currentUser.name.includes("-ALTERADO")) {
            const lastUserReupdated = users.map((user: User, index: number) => {
                if (index === users.length - 1) {
                    return newUser
                } else {
                    return { ...user }
                }
            })

            res.status(200).end()
        } else {
            errorCode = 422
            throw new Error("Usuário não foi alterado recentemente")
        }

    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// Exercício 7:
app.delete("/users/:userId", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const userId: number = Number(req.params.userId)

        const verifyUserId = users.some((user: User) => {
            if (user.id === userId) {
                return true
            }
        })

        if (verifyUserId) {
            const usersListUpdated = users.filter((user: User) => {
                return user.id !== userId
            })
            console.table(usersListUpdated)

            res.status(200).send("Usuário deletado com sucesso")
        } else {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando no http://localhost:${address.port}`)
    } else {
        console.error("Falha ao iniciar servidor")
    }
})