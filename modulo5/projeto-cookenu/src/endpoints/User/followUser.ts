import { Request, Response } from 'express'
import { getTokenData } from '../../services/Token/getTokenData'
import { followUserById } from '../../services/User/followUserById'
import { getUserById } from '../../services/User/getUserById'
import { AuthenticationData } from '../../types'

export const followUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const userToFollowId: string = req.body.userToFollowId

        if (!userToFollowId) {
            res.statusCode = 422
            throw new Error("Id do usuário não enviado")
        }

        const userToFollow = await getUserById(userToFollowId)

        if (!userToFollow) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication.id === userToFollowId) {
            res.statusCode = 409
            throw new Error("Usuário não pode seguir sua própria conta")
        }

        if (authentication) {
            await followUserById(authentication.id, userToFollowId)

            res.status(200).send({ message: `Seguindo usuário ${userToFollow.name}` })
        } else {
            res.statusCode = 401
            throw new Error("Token inválido")
        }
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}