import { Request, Response } from 'express'
import { createRecipe } from '../../services/Recipe/createRecipe'
import { generateId } from '../../services/generateId'
import { getTokenData } from '../../services/Token/getTokenData'
import { AuthenticationData } from '../../types'
import { convertDateToYYYYMMDD } from '../../functions/covertDateToYYYYMMDD'
import { Recipe } from '../../entities/Recipe'

export const postRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.headers.authorization as string
        const { title, description } = req.body

        const id: string = generateId()
        const createdAt: string = convertDateToYYYYMMDD(new Date())

        if (!title || !description) {
            res.statusCode = 422
            throw new Error("Um ou mais campos vazios")
        }

        const authentication = getTokenData(token) as AuthenticationData

        const recipe: Recipe = new Recipe(id, title, description, createdAt, authentication.id)

        if (authentication) {
            await createRecipe(
                recipe.id,
                recipe.title,
                recipe.description,
                recipe.createdAt,
                recipe.getCreatorId()
            )
        } else {
            res.statusCode = 401
            throw new Error("Token inválido")
        }

        res.status(201).send("Receita criada com sucesso!")
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}