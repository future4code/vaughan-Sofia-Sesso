import { Request, Response } from 'express'
import { createHash } from '../services/createHash'
import { generateId } from '../services/generateId'
import { generateToken } from '../services/generateToken'
import { getUserByEmail } from '../services/getUserByEmail'
import { insertUserIntoTable } from '../services/insertUserIntoTable'
import { User } from '../types'

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password, role } = req.body

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido")
        }

        if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Senha inválida")
        }

        if (role.toUpperCase() !== "NORMAL" && role.toUpperCase() !== "ADMIN") {
            res.statusCode = 422
            throw new Error("Role inválido")
        }

        const verifyEmail: User = await getUserByEmail(email)

        if (verifyEmail) {
            res.statusCode = 409
            throw new Error("Email já cadastrado")
        }

        const id: string = generateId()
        const cypherPassword: string = createHash(password)

        await insertUserIntoTable(id, email, cypherPassword, role)

        const token = generateToken({ id, role: role.toUpperCase() })

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