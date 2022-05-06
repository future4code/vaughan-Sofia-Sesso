import { Request, Response } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { CustomError } from '../Error/Error'
import { GetPostByIdDTO, GetPostOutputDTO, InterfacePostController, PostInputDTO } from '../model/Post'

export class PostController implements InterfacePostController {
    constructor(
        private postBusiness: PostBusiness
    ) { }

    public getPostById = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const token = req.headers.authorization as string
            const postId = req.params.id

            const input: GetPostByIdDTO = {
                token,
                postId
            }

            const post: GetPostOutputDTO = await this.postBusiness.getPostById(input)

            res.status(200).send({ post })
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao pegar post")
        }
    }


    public getFeed = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const token = req.headers.authorization as string

            const feed: GetPostOutputDTO[] = await this.postBusiness.getFeed(token)

            res.status(200).send({ posts: feed })
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao pegar feed do usuário")
        }
    }

    public post = async (req: Request, res: Response): Promise<void | Response> => {
        try {
            const token = req.headers.authorization as string
            const { photo, description, type } = req.body

            const input: PostInputDTO = {
                token,
                photo,
                description,
                type: type.toLowerCase()
            }

            await this.postBusiness.post(input)

            res.status(201).send("Post criado com sucesso!")
        }
        catch (error) {
            if (error instanceof CustomError) {
                return res.status(error.statusCode).send(error.message)
            }
            res.status(500).send("Erro ao criar post")
        }
    }
}