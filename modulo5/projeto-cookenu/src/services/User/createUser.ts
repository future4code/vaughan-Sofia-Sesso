import { connection } from "../../connection"

export const createUser = async (
    id: string,
    name: string,
    email: string,
    password: string
): Promise<void> => {
    await connection("Cookenu_User")
        .insert({ id, name, email, password })
}