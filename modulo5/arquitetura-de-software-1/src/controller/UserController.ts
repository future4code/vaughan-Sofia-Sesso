import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { User } from '../types'

const userBusiness: UserBusiness = new UserBusiness()

export class UserController {
    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const { name, email, password, role } = req.body

            const token: string = await userBusiness.createUser(name, email, password, role.toUpperCase())

            res.status(201).send({ token, message: "Usuário cadastrado com sucesso!" })
        }
        catch (err: any) {
            res.send(err.message)
        }
    }

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const { email, password } = req.body

            const token: string = await userBusiness.getUserByEmail(email, password)

            res.status(200).send({ token })
        }
        catch (err: any) {
            res.send(err.message)
        }
    }

    public getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string

            const users: User[] = await userBusiness.getAllUsers(token)

            res.status(200).send({ users })
        }
        catch (err: any) {
            res.send(err.message)
        }
    }

    public deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization as string
            const userId: string = req.params.id

            await userBusiness.deleteUser(token, userId)

            res.status(200).send({ message: "Usuário deletado com sucesso!" })
        }
        catch (err: any) {
            res.send(err.message)
        }
    }
}