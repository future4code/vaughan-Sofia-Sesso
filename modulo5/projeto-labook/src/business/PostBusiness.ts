import { InterfacePostDatabase, Post, PostInputDTO } from '../model/Post'
import { Authenticator } from '../services/Authenticator'
import { IdGenerator } from '../services/IdGenerator'
import { AuthenticationData } from '../types/AuthenticationData'
import { POST_TYPE } from '../types/POST_TYPE'

export class PostBusiness {
    constructor(
        private postDatabase: InterfacePostDatabase
    ) { }

    public post = async (input: PostInputDTO): Promise<void> => {
        const { token, photo, description, type } = input
        const typeLC: string = type.toLowerCase()

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Error("Token inválido")
        }

        if (!photo || !description || !type) {
            throw new Error("Um ou mais campos vazios")
        }

        if (typeLC !== POST_TYPE.NORMAL && typeLC !== POST_TYPE.EVENT) {
            throw new Error("Tipo de post inválido")
        }

        const id: string = IdGenerator.generateId()

        const post: Post = new Post(id, photo, description, typeLC, authentication.id)

        await this.postDatabase.insertPost(post)
    }
}