import { connection } from "../../connection"
import { USER_ROLE } from "../../types"

export const createUser = async (
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLE
): Promise<void> => {
    await connection("Cookenu_User")
        .insert({ id, name, email, password, role })
}