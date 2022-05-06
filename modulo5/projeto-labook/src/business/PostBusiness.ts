import { Conflict, NotFound, Unauthorized, UnprocessableEntity } from '../Error/Error'
import { GetPostByIdDTO, GetPostOutputDTO, GetPostOutput, InterfacePostDatabase, Post, PostInputDTO, GetPostLikeOutput, LikePostInput, PostCommentInputDTO, PostCommentInput } from '../model/Post'
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

    public commentOnPost = async (input: PostCommentInputDTO): Promise<void> => {
        const { token, postId, comment } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        if (!postId) {
            throw new UnprocessableEntity("Id do post não enviado")
        }

        const post: GetPostOutput = await this.postDatabase.selectPostById(postId)

        if (!post) {
            throw new NotFound("Post não encontrado")
        }

        if (!comment) {
            throw new UnprocessableEntity("Campo 'comment' vazio")
        }

        const id: string = IdGenerator.generateId()

        const commentInput: PostCommentInput = {
            id,
            userId: authentication.id,
            postId,
            comment
        }

        await this.postDatabase.insertComment(commentInput)
    }

    public likePost = async (token: string, postId: string): Promise<void> => {
        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        if (!postId) {
            throw new UnprocessableEntity("Id do post não enviado")
        }

        const post: GetPostOutput = await this.postDatabase.selectPostById(postId)

        if (!post) {
            throw new NotFound("Post não encontrado")
        }

        const isPostLiked: GetPostLikeOutput = await this.postDatabase.getPostLike(authentication.id, postId)

        if (isPostLiked && isPostLiked.liked === 1) {
            throw new Conflict("Usuário já curtiu esse post")
        }

        const id: string = IdGenerator.generateId()

        const input: LikePostInput = {
            id,
            userId: authentication.id,
            postId
        }

        await this.postDatabase.insertLike(input)
    }

    public dislikePost = async (token: string, postId: string): Promise<void> => {
        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        if (!postId) {
            throw new UnprocessableEntity("Id do post não enviado")
        }

        const post: GetPostOutput = await this.postDatabase.selectPostById(postId)

        if (!post) {
            throw new NotFound("Post não encontrado")
        }

        const likedPost: GetPostLikeOutput = await this.postDatabase.getPostLike(authentication.id, postId)

        if (likedPost && likedPost.liked === 1) {
            await this.postDatabase.insertDislike(likedPost.id)
        } else {
            throw new Conflict("Usuário não curtiu esse post")
        }
    }
}