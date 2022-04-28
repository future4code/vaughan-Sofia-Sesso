import { connection } from "../../connection"
import { convertDateToDDMMYYYY } from "../../functions/covertDateToDDMMYYYY"
import { RecipeInfo } from "../../types"

export const getAllUserRecipes = async (id: string): Promise<RecipeInfo[]> => {
    const result: RecipeInfo[] = await connection("Cookenu_Recipe")
        .join('Cookenu_User', { 'Cookenu_User.id': 'creator_id' })
        .select(
            'Cookenu_Recipe.id as id',
            'title',
            'description',
            'created_at as createdAt',
            'Cookenu_User.id as userId',
            'name as userName'
        )
        .where({ creator_id: id })

    const resultWithFixedDates = result.map((recipe: RecipeInfo) => {
        return {
            ...recipe,
            createdAt: convertDateToDDMMYYYY(recipe.createdAt as object)
        }
    })

    return resultWithFixedDates
}