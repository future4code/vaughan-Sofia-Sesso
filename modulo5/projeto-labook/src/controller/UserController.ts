import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { CustomError } from '../Error/Error'
import { AddFriendInputDTO, InterfaceUserController, LoginInputDTO, SignupInputDTO } from '../model/User'

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

            const token: string = await this.userBusiness.signup(input)

            res.status(201).send({ token, message: "Usuário criado com sucesso!" })
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

            const token: string = await this.userBusiness.login(input)

            res.status(200).send({ token })
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao logar")
        }
    }

    public addFriend = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const token = req.headers.authorization as string
            const friendId = req.params.id

            const input: AddFriendInputDTO = {
                token,
                friendId
            }

            const friendName: string = await this.userBusiness.addFriend(input)

            res.status(200).send(`Usuário adicionou ${friendName} à sua lista de amigos!`)
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao adicionar amigo")
        }
    }
}