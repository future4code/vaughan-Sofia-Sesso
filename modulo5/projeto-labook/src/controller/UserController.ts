import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { SignupInputDTO } from '../model/User'

export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response): Promise<any> => {
        try {
            const { name, email, password } = req.body

            const input: SignupInputDTO = {
                name,
                email,
                password
            }

            const response = await this.userBusiness.signup(input)

            res.status(201).send({ token: response, message: "Usuário criado com sucesso!" })
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).send(error.message)
            }
            res.status(500).send("Erro ao cadastrar")
        }
    }
}