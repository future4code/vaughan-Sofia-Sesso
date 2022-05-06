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

export interface ManagingFriendshipInputDTO {
    token: string
    friendId: string
}

export interface AddFriendInput {
    idForUserFriendship: string
    idForFriendFriendship: string
    userId: string
    friendId: string
}

export interface getFriendshipOutput {
    id: string
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

    getFriendship(userId: string, friendId: string): Promise<getFriendshipOutput>

    insertUser(user: User): Promise<void>

    insertFriendship(input: AddFriendInput): Promise<void>

    deleteFriendship(id: string): Promise<void>
}

export interface InterfaceUserController {
    signup(req: Request, res: Response): Promise<void | Response>

    login(req: Request, res: Response): Promise<void | Response>

    addFriend(req: Request, res: Response): Promise<void | Response>

    unfriend(req: Request, res: Response): Promise<void | Response>
}