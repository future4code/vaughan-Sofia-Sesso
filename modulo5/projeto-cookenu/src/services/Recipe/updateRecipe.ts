import { connection } from "../../connection"

export const updateRecipe = async (id: string, title: string, description: string): Promise<void> => {
    await connection("Cookenu_Recipe")
        .update({ title, description })
        .where({ id })
}