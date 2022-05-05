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
}

export interface LoginInputDTO {
    email: string
    password: string
}

export interface AddFriendInputDTO {
    token: string
    friendId: string
}

export interface AddFriendInput {
    id: string
    userId: string
    friendId: string
}

export interface getFriendshipOutput {
    userId: string
    friendId: string
}

export interface GetUserOutput {
    id: string
    name: string
    email: string
    password: string
}

export interface InterfaceUserDatabase {
    getUserByEmail(email: string): Promise<GetUserOutput>

    getUserById(id: string): Promise<GetUserOutput>

    insertUser(user: User): Promise<void>

    insertFriendship(input: AddFriendInput): Promise<void>

    getFriendship(userId: string, friendId: string): Promise<getFriendshipOutput>
}

export interface InterfaceUserController {
    signup(req: Request, res: Response): Promise<void | Response>

    login(req: Request, res: Response): Promise<void | Response>

    addFriend(req: Request, res: Response): Promise<void | Response>
}