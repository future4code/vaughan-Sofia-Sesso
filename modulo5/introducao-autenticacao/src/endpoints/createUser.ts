import { Request, Response } from 'express'
import { generateId } from '../services/generateId'
import { generateToken } from '../services/generateToken'
import { getUserByEmail } from '../services/getUserByEmail'
import { insertUserIntoTable } from '../services/insertUserIntoTable'

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Senha inválida")
        }

        const verifyEmail = await getUserByEmail(email)

        if (verifyEmail) {
            res.statusCode = 409
            throw new Error("Email já cadastrado")
        }

        const id = generateId()

        await insertUserIntoTable(id, email, password)

        const token = generateToken({ id })

        res.status(201).send({ token })
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}