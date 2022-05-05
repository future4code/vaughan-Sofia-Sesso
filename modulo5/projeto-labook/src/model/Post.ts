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

export interface GetPostByIdDTO {
    token: string
    postId: string
}

export interface GetPostByIdOutput {
    id: string
    photo: string
    description: string
    type: POST_TYPE
    createdAt: object
    authorId: string
}

export interface GetPostByIdOutputDTO {
    id: string
    photo: string
    description: string
    type: POST_TYPE
    createdAt: string
    authorId: string
}

export interface InterfacePostDatabase {
    insertPost(post: Post): Promise<void>

    selectPostById(postId: string): Promise<GetPostByIdOutput>
}

export interface InterfacePostController {
    post(req: Request, res: Response): Promise<void | Response>

    getPostById(req: Request, res: Response): Promise<void | Response>
}