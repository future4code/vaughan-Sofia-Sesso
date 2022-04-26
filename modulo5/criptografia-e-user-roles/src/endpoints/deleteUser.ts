import { Request, Response } from 'express'
import { deleteUserById } from '../services/deleteUserById'
import { getTokenData } from '../services/getTokenData'
import { getUserById } from '../services/getUserById'
import { AuthenticationData, User } from '../types'

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId: string = req.params.id
        const token: string = req.headers.authorization as string

        const user: User = await getUserById(userId)

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication.role !== "ADMIN") {
            res.statusCode = 403
            throw new Error("Usuário sem acesso")
        }

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário inexistente")
        }

        await deleteUserById(userId)

        res.status(200).send(`Usuário com id:${userId} deletado`)
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}