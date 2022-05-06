import { NotFound, Unauthorized, UnprocessableEntity } from '../Error/Error'
import { GetPostByIdDTO, GetPostOutputDTO, GetPostOutput, InterfacePostDatabase, Post, PostInputDTO } from '../model/Post'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { AuthenticationData } from '../types/AuthenticationData'
import { POST_TYPE } from '../types/POST_TYPE'
import { convertDate } from '../utils/convertDate'

export class PostBusiness {
    constructor(
        private postDatabase: InterfacePostDatabase
    ) { }

    public getPostById = async (input: GetPostByIdDTO): Promise<GetPostOutputDTO> => {
        const { token, postId } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        const post: GetPostOutput = await this.postDatabase.selectPostById(postId)

        const postWithFixedDate: GetPostOutputDTO = {
            ...post,
            createdAt: convertDate(post.createdAt)
        }

        return postWithFixedDate
    }

    public getFeed = async (token: string): Promise<GetPostOutputDTO[]> => {
        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        const feed: GetPostOutput[] = await this.postDatabase.getFriendsPosts(authentication.id)

        if (feed.length === 0) {
            throw new NotFound("Não há posts no feed do usuário")
        }

        const feedWithFixedDate: GetPostOutputDTO[] = feed.map((post: GetPostOutput) => {
            return {
                ...post,
                createdAt: convertDate(post.createdAt)
            }
        })

        return feedWithFixedDate
    }

    public getFeedByType = async (token: string, type: string): Promise<GetPostOutputDTO[]> => {
        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        if (type !== POST_TYPE.EVENT && type !== POST_TYPE.NORMAL) {
            throw new UnprocessableEntity("Post tem que ser do tipo 'normal' ou 'event'")
        }

        const feed: GetPostOutput[] = await this.postDatabase.getPostsByType(type)

        if (feed.length === 0) {
            throw new NotFound("Não há posts no feed do usuário")
        }

        const feedWithFixedDate: GetPostOutputDTO[] = feed.map((post: GetPostOutput) => {
            return {
                ...post,
                createdAt: convertDate(post.createdAt)
            }
        })

        return feedWithFixedDate
    }

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
}