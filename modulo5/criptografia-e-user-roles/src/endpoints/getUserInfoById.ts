import { Request, Response } from 'express'
import { getTokenData } from '../services/getTokenData'
import { getUserById } from '../services/getUserById'
import { User, AuthenticationData } from '../types'

export const getUserInfoById = async (req: Request, res: Response): Promise<any> => {
    try {
        const token: string = req.headers.authorization as string

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication) {
            const user: User = await getUserById(authentication.id)

            res.status(200).send({ user: { id: user.id, email: user.email, role: user.role } })
        } else {
            res.statusCode = 401
            throw new Error("Token inválido")
        }
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}