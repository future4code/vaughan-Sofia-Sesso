import { connection } from "../../connection"
import { convertDateToDDMMYYYY } from "../../functions/covertDateToDDMMYYYY"
import { RecipeInfo } from "../../types"

export const getFeedRecipes = async (id: string): Promise<RecipeInfo[]> => {
    const result: RecipeInfo[] = await connection("Cookenu_User_Following")
        .where({ follower_id: id })
        .join('Cookenu_Recipe', { 'user_to_follow_id': 'creator_id' })
        .join('Cookenu_User', { 'user_to_follow_id': 'Cookenu_User.id' })
        .select(
            'Cookenu_Recipe.id as id',
            'title',
            'description',
            'created_at as createdAt',
            'Cookenu_User.id as userId',
            'name as userName'
        )

    const resultWithFixedDates = result.map((recipe: RecipeInfo) => {
        return {
            ...recipe,
            createdAt: convertDateToDDMMYYYY(recipe.createdAt as object)
        }
    })

    return resultWithFixedDates
}