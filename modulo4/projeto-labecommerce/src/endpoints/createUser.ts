import { Request, Response } from 'express'
import { connection } from '../connection'

const createUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 422
            throw new Error("Um ou mais campos vazios")
        } else {
            await connection("labecommerce_users")
                .insert({
                    id: new Date().getTime(),
                    name,
                    email,
                    password
                })

            res.status(201).send("Usuário cadastrado com sucesso!")
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

export default createUser