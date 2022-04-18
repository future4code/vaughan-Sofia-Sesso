import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from '../types'

export const getUsersAllFilters = async (req: Request, res: Response): Promise<void> => {
    try {
        const query: string = req.query.query as string

        const page: number = Number(req.query.page)
        const size: number = 5
        let offset: number

        if (!page || page <= 0) {
            offset = 0
        } else {
            offset = size * (page - 1)
        }

        let param = req.query.param as string
        let order = req.query.order as string

        if (!param || param.toLowerCase() !== "email" && param.toLowerCase() !== "type") {
            param = "name"
        }

        if (order.toLowerCase() !== "asc") {
            order = "desc"
        }

        const users: User[] = await selectAllUsers(query, size, offset, param, order)

        if (!users.length) {
            res.statusCode = 404
            throw new Error("Nenhum usuário encontrado")
        }

        res.status(200).send(users)

    } catch (error: any) {
        res.send(error.message || error.sqlMessage)
    }
}

export default async function selectAllUsers(
    query: string,
    size: number,
    offset: number,
    param: string,
    order: string
): Promise<User[]> {
    const result: User[] = await connection("aula48_exercicio")
        .limit(size)
        .offset(offset)
        .where('name', 'like', `%${query}%`)
        .orderBy(`${param}`, `${order}`)

    return result
}