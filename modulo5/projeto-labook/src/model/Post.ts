import { POST_TYPE } from "../types/POST_TYPE"

export class Post {
    constructor(
        id: string,
        photo: string,
        description: string,
        type: POST_TYPE,
        createdAt: number,
        authorId: string
    ) { }
}