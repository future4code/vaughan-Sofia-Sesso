import { connection } from "../../connection"

export const deleteUser = async (id: string): Promise<void> => {
    await connection("Cookenu_User")
        .delete()
        .where({ id })
}