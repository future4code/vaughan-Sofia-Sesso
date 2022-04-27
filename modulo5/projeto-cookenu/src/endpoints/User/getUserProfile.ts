import { Request, Response } from 'express'
import { getTokenData } from '../../services/Token/getTokenData'
import { getUserById } from '../../services/User/getUserById'
import { AuthenticationData, UserProfileInfo } from '../../types'

export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
    try {
        const token: string = req.headers.authorization as string

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication) {
            const user: UserProfileInfo = await getUserById(authentication.id)

            res.status(200).send({ id: user.id, name: user.name, email: user.email })
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