import { Unauthorized, UnprocessableEntity } from '../Error/Error'
import { GetPostByIdDTO, GetPostByIdOutputDTO, GetPostByIdOutput, InterfacePostDatabase, Post, PostInputDTO } from '../model/Post'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { AuthenticationData } from '../types/AuthenticationData'
import { POST_TYPE } from '../types/POST_TYPE'
import { convertDate } from '../utils/convertDate'

export class PostBusiness {
    constructor(
        private postDatabase: InterfacePostDatabase
    ) { }

    public post = async (input: PostInputDTO): Promise<void> => {
        let { token, photo, description, type } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        if (!photo || !description) {
            throw new UnprocessableEntity("Um ou mais campos vazios")
        }

        if (type !== POST_TYPE.EVENT) {
            type = POST_TYPE.NORMAL
        }

        const id: string = IdGenerator.generateId()

        const post: Post = new Post(id, photo, description, type, authentication.id)

        await this.postDatabase.insertPost(post)
    }

    public getPostById = async (input: GetPostByIdDTO): Promise<GetPostByIdOutputDTO> => {
        const { token, postId } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        const post: GetPostByIdOutput = await this.postDatabase.selectPostById(postId)

        const postWithFixedDate: GetPostByIdOutputDTO = {
            ...post,
            createdAt: convertDate(post.createdAt)
        }

        return postWithFixedDate
    }
}