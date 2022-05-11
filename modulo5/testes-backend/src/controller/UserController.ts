import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { CustomError } from '../errors/CustomError'
import { GetUserOutput, InterfaceUserController, User } from '../models/User'

export class UserController implements InterfaceUserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public getUserById = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const id: string = req.params.id

            const user: GetUserOutput = await this.userBusiness.getUserById(id)

            res.status(200).send({ user })
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao pegar informações do usuário")
        }
    }
}