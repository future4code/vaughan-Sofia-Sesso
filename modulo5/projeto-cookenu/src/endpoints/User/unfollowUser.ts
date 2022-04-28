import { Request, Response } from 'express'
import { getTokenData } from '../../services/Token/getTokenData'
import { getUserById } from '../../services/User/getUserById'
import { unfollowUserById } from '../../services/User/unfollowUserById'
import { AuthenticationData } from '../../types'

export const unfollowUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const userToUnfollowId: string = req.body.userToFollowId

        if (!userToUnfollowId) {
            res.statusCode = 422
            throw new Error("Id do usuário não enviado")
        }

        const userToUnfollow = await getUserById(userToUnfollowId)

        if (!userToUnfollow) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication) {
            await unfollowUserById(authentication.id, userToUnfollowId)

            res.status(200).send({ message: `Deixou de seguir usuário ${userToUnfollow.name}` })
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