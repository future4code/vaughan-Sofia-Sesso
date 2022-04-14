import { Request, Response } from 'express'
import { connection } from '../connection'

const createProduct = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { name, price, imageUrl } = req.body

        if (!name || !price || !imageUrl) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            await connection("labecommerce_products")
                .insert({
                    id: new Date().getTime(),
                    name,
                    price,
                    image_url: imageUrl
                })

            res.status(201).send("Produto cadastrado com sucesso!")
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

export default createProduct