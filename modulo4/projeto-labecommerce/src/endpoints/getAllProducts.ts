import { Request, Response } from 'express'
import { connection } from '../connection'
import { Product } from '../types'

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { order, search } = req.query as { order: string, search: string }
        let result: Product[]

        if (!order || order.toLowerCase() !== "asc" && order.toLowerCase() !== "desc") {
            result = await connection("labecommerce_products")
                .where('name', 'like', `%${search}%`)
        } else {
            result = await connection("labecommerce_products")
                .orderBy('name', `${order}`)
                .where('name', 'like', `%${search}%`)
        }

        if (result.length === 0) {
            errorCode = 404
            throw new Error("Nenhum produto encontrado")
        } else {
            res.status(200).send({ products: result })
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        } else {
            res.status(errorCode).send("Ocorreu um erro inesperado")
        }
    }
}

export default getAllProducts