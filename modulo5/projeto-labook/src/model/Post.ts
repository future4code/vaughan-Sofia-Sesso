import { Request, Response } from 'express'
import { POST_TYPE } from "../types/POST_TYPE"

export class Post {
    constructor(
        private id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPE,
        private author_id: string
    ) { }
}

export interface PostInputDTO {
    token: string
    photo: string
    description: string
    type: POST_TYPE
}

export interface InterfacePostDatabase {
    insertPost(post: Post): Promise<void>
}

export interface InterfacePostController {
    post(req: Request, res: Response): Promise<void | Response>
}