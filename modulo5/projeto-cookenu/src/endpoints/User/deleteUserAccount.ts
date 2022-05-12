import { Request, Response } from 'express'
import { deleteAllUserRecipes } from '../../services/Recipe/deleteAllUserRecipes'
import { getTokenData } from '../../services/Token/getTokenData'
import { deleteUser } from '../../services/User/deleteUser'
import { getUserById } from '../../services/User/getUserById'
import { unfollowAll } from '../../services/User/unfollowAll'
import { AuthenticationData, UserProfileInfo } from '../../types'

export const deleteUserAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const userId: string = req.params.id

        const authentication = getTokenData(token) as AuthenticationData
        console.log(authentication)

        const user: UserProfileInfo = await getUserById(userId)

        if (!user) {
            res.statusCode = 404
            throw new Error("Usuário não encontrado")
        }

        if (!authentication) {
            res.statusCode = 401
            throw new Error("Token inválido")
        }

        if (authentication.role !== "ADMIN") {
            res.statusCode = 403
            throw new Error("Usuário sem acesso")
        }

        const main = async () => {
            try {
                await unfollowAll(userId)
                await deleteAllUserRecipes(userId)
                await deleteUser(userId)
            }
            catch (err: any) {
                res.send(err.response?.data || err.message)
            }
        }
        main()
        res.status(200).send("Usuário deletado com sucesso!")

    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}