import { Request, Response } from 'express'

export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLES
    ) { }
}

export interface GetUserOutput {
    id: string
    name: string
    email: string
    password: string
    role: USER_ROLES
}

export interface InterfaceUserController {
    getUserById(req: Request, res: Response): Promise<void | Response>
}

export interface InterfaceUserDatabase {
    selectUserById(id: string): Promise<GetUserOutput>
}