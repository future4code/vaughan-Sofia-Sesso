import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from '../types'

export const get5UsersByPage = async (req: Request, res: Response): Promise<void> => {
    try {
        let page: number = Number(req.params.page)
        const size: number = 5
        const offset: number = size * (page - 1)

        const users: User[] = await selectAllUsers(size, offset)

        if (page <= 0) {
            page = 1
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

export default async function selectAllUsers(size: number, offset: number): Promise<User[]> {
    const result: User[] = await connection("aula48_exercicio")
        .limit(size)
        .offset(offset)

    return result
}