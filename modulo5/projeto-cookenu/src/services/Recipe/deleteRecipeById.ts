import { connection } from "../../connection"

export const deleteRecipeById = async (id: string): Promise<void> => {
    await connection("Cookenu_Recipe")
        .delete()
        .where({ id })
}