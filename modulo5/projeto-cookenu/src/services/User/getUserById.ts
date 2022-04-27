import { connection } from "../../connection"
import { UserProfileInfo } from "../../types"

export const getUserById = async (id: string): Promise<UserProfileInfo> => {
    const result: UserProfileInfo[] = await connection("Cookenu_User")
        .where({ id })

    return result[0]
}