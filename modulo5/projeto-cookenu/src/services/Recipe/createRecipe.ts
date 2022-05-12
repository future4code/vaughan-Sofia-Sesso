import { connection } from "../../connection"

export const createRecipe = async (
    id: string,
    title: string,
    description: string,
    createdAt: string,
    creatorId: string
): Promise<void> => {
    await connection("Cookenu_Recipe")
        .insert({ id, title, description, created_at: createdAt, creator_id: creatorId })
}