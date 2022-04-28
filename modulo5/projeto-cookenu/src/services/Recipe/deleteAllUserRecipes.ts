import { connection } from "../../connection"

export const deleteAllUserRecipes = async (id: string): Promise<void> => {
    await connection("Cookenu_Recipe")
        .delete()
        .where({ creator_id: id })
}