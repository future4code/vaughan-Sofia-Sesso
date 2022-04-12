import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from '../types'

export const getAllUsersByOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        let param = req.query.param as string
        let order = req.query.order as string

        if (param.toLowerCase() !== "name" && param.toLowerCase() !== "type") {
            param = "email"
        }

        if (order.toLowerCase() !== "desc") {
            order = "asc"
        }

        const users: User[] = await selectAllUsers(param, order)

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

export default async function selectAllUsers(param: string, order: string): Promise<User[]> {
    const result: User[] = await connection("aula48_exercicio")
        .orderBy(`${param}`, `${order}`)

    return result
}