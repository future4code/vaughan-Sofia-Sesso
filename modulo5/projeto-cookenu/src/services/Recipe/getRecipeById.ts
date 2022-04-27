import { connection } from "../../connection"
import { Recipe } from "../../entities/Recipe"

export const getRecipeById = async (id: string): Promise<Recipe> => {
    const result: Recipe[] = await connection("Cookenu_Recipe")
        .where({ id })

    return result[0]
}