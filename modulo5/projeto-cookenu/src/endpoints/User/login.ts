import { Request, Response } from 'express'
import { compareHash } from '../../services/Hash/compareHash'
import { generateToken } from '../../services/Token/generateToken'
import { getUserByEmail } from '../../services/User/getUserByEmail'
import { UserProfileInfo } from '../../types'

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido")
        }

        const user: UserProfileInfo = await getUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário inexistente")
        }

        const isPasswordCorrect: boolean = compareHash(password, user.password)

        if (!isPasswordCorrect) {
            res.statusCode = 401
            throw new Error("Senha incorreta")
        }

        const token: string = generateToken({ id: user.id })

        res.status(200).send({ access_token: token })
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}