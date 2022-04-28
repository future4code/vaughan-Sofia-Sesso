import { Request, Response } from 'express'
import { deleteRecipeById } from '../../services/Recipe/deleteRecipeById'
import { getRecipeById } from '../../services/Recipe/getRecipeById'
import { getTokenData } from '../../services/Token/getTokenData'
import { AuthenticationData, RecipeInfo } from '../../types'

export const deleteRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const recipeId: string = req.params.id

        const authentication = getTokenData(token) as AuthenticationData

        const recipe: RecipeInfo = await getRecipeById(recipeId)

        if (!recipe) {
            res.statusCode = 404
            throw new Error("Receita não encontrada")
        }

        if (!authentication) {
            res.statusCode = 401
            throw new Error("Token inválido")
        }

        if (recipe.creatorId !== authentication.id && authentication.role === "NORMAL") {
            res.statusCode = 401
            throw new Error("Essa receita não pertence ao usuário logado")
        }

        await deleteRecipeById(recipeId)

        res.status(200).send(`Receita ${recipe.title} deletada com sucesso!`)
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}