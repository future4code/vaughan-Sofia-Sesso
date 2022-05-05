import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { CustomError } from '../Error/Error'
import { InterfaceUserController, LoginInputDTO, SignupInputDTO } from '../model/User'

export class UserController implements InterfaceUserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const { name, email, password } = req.body

            const input: SignupInputDTO = {
                name,
                email,
                password
            }

            const response: string = await this.userBusiness.signup(input)

            res.status(201).send({ token: response, message: "Usuário criado com sucesso!" })
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao cadastrar")
        }
    }

    public login = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email,
                password
            }

            const response: string = await this.userBusiness.login(input)

            res.status(200).send({ token: response })
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao cadastrar")
        }
    }
}