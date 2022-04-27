import { Request, Response } from 'express'
import { Recipe } from '../../entities/Recipe'
import { getRecipeById } from '../../services/Recipe/getRecipeById'
import { getTokenData } from '../../services/Token/getTokenData'
import { AuthenticationData } from '../../types'

export const getRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const recipeId: string = req.params.id
        const token = req.headers.authorization as string

        const authentication = getTokenData(token) as AuthenticationData

        if (authentication) {
            const recipe: Recipe = await getRecipeById(recipeId)

            if (recipe) {
                res.status(200).send(
                    {
                        id: recipe.id,
                        title: recipe.title,
                        description: recipe.description,
                        createdAt: recipe.createdAt
                    }
                )
            } else {
                res.statusCode = 404
                throw new Error("Receita não encontrada")
            }
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