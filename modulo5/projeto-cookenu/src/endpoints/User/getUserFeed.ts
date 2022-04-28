import { Request, Response } from 'express'
import { Recipe } from '../../entities/Recipe'
import { getTokenData } from '../../services/Token/getTokenData'
import { getAllUserRecipes } from '../../services/User/getAllUserRecipes'
import { AuthenticationData } from '../../types'

export const getUserFeed = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication) {
            const feed: Recipe[] = await getAllUserRecipes(authentication.id)

            res.status(200).send({ recipes: feed })
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