import { Request, Response } from 'express'
import { connection } from '../connection'
import { Purchase } from '../types'

const getUserPurchases = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const userId = req.params.user_id

        if (!userId) {
            throw new Error("Id do usuário não foi enviado")
        } else {
            const result: Purchase[] = await connection("labecommerce_purchases")
                .where({ user_id: userId })

            if (result.length === 0) {
                errorCode = 404
                throw new Error(`Nenhuma compra foi encontrada para o usuário com id ${userId}`)
            } else {
                res.status(200).send({ purchases: result })
            }
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

export default getUserPurchases