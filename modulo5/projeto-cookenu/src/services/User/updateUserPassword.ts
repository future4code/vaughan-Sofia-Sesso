import { connection } from "../../connection"

export const updateUserPassword = async (email: string, newPassword: string): Promise<void> => {
    await connection("Cookenu_User")
        .update({ password: newPassword })
        .where({ email })
}