import { Request, Response } from 'express'
import { generateToken } from '../services/generateToken'
import { getUserByEmail } from '../services/getUserByEmail'
import { User } from '../types'

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido")
        }

        const user: User = await getUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        if (user.password !== password) {
            res.statusCode = 422
            throw new Error("Senha inválida")
        }

        const token = generateToken(user.id)

        res.status(200).send({ token })
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}