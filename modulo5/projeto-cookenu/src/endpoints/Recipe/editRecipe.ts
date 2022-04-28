import { Request, Response } from 'express'
import { getRecipeById } from '../../services/Recipe/getRecipeById'
import { updateRecipe } from '../../services/Recipe/updateRecipe'
import { getTokenData } from '../../services/Token/getTokenData'
import { AuthenticationData } from '../../types'

export const editRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const recipeId = req.params.id
        const { title, description } = req.body

        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Um ou mais campos vazios")
        }

        const recipe = await getRecipeById(recipeId)

        if (!recipe) {
            res.statusCode = 404
            throw new Error("Receita não encontrada")
        }

        const authentication = getTokenData(token) as AuthenticationData

        if (!authentication) {
            res.statusCode = 401
            throw new Error("Token inválido")
        }

        if (recipe.creatorId !== authentication.id) {
            res.statusCode = 401
            throw new Error("Essa receita não pertence ao usuário logado")
        }

        if (authentication.role !== "NORMAL") {
            res.statusCode = 403
            throw new Error("Usuário sem acesso")
        }

        await updateRecipe(recipeId, title, description)

        res.status(200).send(`Receita ${title} alterada com sucesso!`)
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}