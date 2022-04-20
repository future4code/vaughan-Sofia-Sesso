import { Request, Response } from 'express'
import { connection } from '../connection'

const createPurchase = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { userId, productId, quantity } = req.body

        if (!userId || !productId || !quantity) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            const product = await connection("labecommerce_products")
                .where({ id: productId })

            await connection("labecommerce_purchases")
                .insert({
                    id: new Date().getTime(),
                    user_id: userId,
                    product_id: productId,
                    quantity,
                    total_price: product[0].price * quantity

                })

            res.status(201).send("Compra registrada com sucesso!")
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

export default createPurchase