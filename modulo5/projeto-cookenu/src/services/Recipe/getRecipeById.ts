import { connection } from "../../connection"
import { RecipeInfo } from "../../types"

export const getRecipeById = async (id: string): Promise<RecipeInfo> => {
    const result: RecipeInfo[] = await connection("Cookenu_Recipe")
        .select('id', 'title', 'description', 'created_at as createdAt', 'creator_id as creatorId')
        .where({ id })

    return result[0]
}