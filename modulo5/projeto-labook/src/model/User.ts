import { Request, Response } from 'express'

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
}

export interface SignupInputDTO {
    name: string
    email: string
    password: string
}[]

export interface LoginInputDTO {
    email: string
    password: string
}

export interface UserInput {
    id: string
    name: string
    email: string
    password: string
}

export interface GetUserByEmailOutput {
    id: string
    name: string
    email: string
    password: string
}

export interface InterfaceUserDatabase {
    getUserByEmail(email: string): Promise<GetUserByEmailOutput>

    insertUser(user: User): Promise<void>
}

export interface InterfaceUserController {
    signup(req: Request, res: Response): Promise<void | Response>

    login(req: Request, res: Response): Promise<void | Response>
}