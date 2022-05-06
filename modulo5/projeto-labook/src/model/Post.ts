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

export interface GetPostOutput {
    id: string
    photo: string
    description: string
    type: POST_TYPE
    createdAt: object
    authorId: string
}

export interface GetPostOutputDTO {
    id: string
    photo: string
    description: string
    type: POST_TYPE
    createdAt: string
    authorId: string
}

export interface GetPostLikeOutput {
    id: string
    userId: string
    postId: string
    liked: 1 | 0
}

export interface LikePostInput {
    id: string
    userId: string
    postId: string
}

export interface InterfacePostDatabase {
    selectPostById(postId: string): Promise<GetPostOutput>

    getFriendsPosts(id: string): Promise<GetPostOutput[]>

    getPostsByType(type: string): Promise<GetPostOutput[]>

    getPostLike(userId: string, postId: string): Promise<GetPostLikeOutput>

    insertPost(post: Post): Promise<void>

    insertLike(input: LikePostInput): Promise<void>

    insertDislike(id: string): Promise<void>
}

export interface InterfacePostController {
    getPostById(req: Request, res: Response): Promise<void | Response>

    getFeed(req: Request, res: Response): Promise<void | Response>

    getFeedByType(req: Request, res: Response): Promise<void | Response>

    post(req: Request, res: Response): Promise<void | Response>

    likePost(req: Request, res: Response): Promise<void | Response>

    dislikePost(req: Request, res: Response): Promise<void | Response>
}