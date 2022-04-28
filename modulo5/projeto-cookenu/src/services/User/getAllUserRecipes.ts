import { connection } from "../../connection"
import { Recipe } from "../../entities/Recipe"

export const getAllUserRecipes = async (id: string): Promise<Recipe[]> => {
    const result: Recipe[] = await connection("Cookenu_Recipe")
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

    return result
}