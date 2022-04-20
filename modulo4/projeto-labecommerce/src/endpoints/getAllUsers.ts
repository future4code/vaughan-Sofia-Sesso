import { Request, Response } from 'express'
import { connection } from '../connection'
import { User } from '../types'

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const result: User[] = await connection("labecommerce_users")

        if (result.length === 0) {
            errorCode = 404
            throw new Error("Nenhum usuário encontrado")
        }

        const userAndPurchaseInfo = []

        for (let user of result) {
            const purchaseInfo = await connection("labecommerce_purchases")
                .select('id as purchaseId', 'product_id as productId', 'quantity', 'total_price as totalPrice')
                .where({ user_id: user.id })

            userAndPurchaseInfo.push({
                ...user,
                purchases: purchaseInfo
            })
        }
        res.status(200).send({ users: userAndPurchaseInfo })
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ message: err.message })
        } else {
            res.status(errorCode).send("Ocorreu um erro inesperado")
        }
    }
}

export default getAllUsers