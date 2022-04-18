import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from '../types'

export const getAllUsersByType = async (req: Request, res: Response): Promise<void> => {
    try {
        const type: string = req.params.type

        const users: User[] = await selectAllUsers(type)

        if (type !== 'Teacher' && type !== 'Operations' && type !== 'CX') {
            res.statusCode = 422
            throw new Error("Type enviado inválido")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

export default async function selectAllUsers(type: string): Promise<User[]> {
    const result: User[] = await connection("aula48_exercicio")
        .where({ type })

    return result
}