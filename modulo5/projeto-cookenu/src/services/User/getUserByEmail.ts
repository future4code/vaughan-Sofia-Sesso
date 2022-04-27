import { connection } from "../../connection"
import { UserProfileInfo } from "../../types"

export const getUserByEmail = async (email: string): Promise<UserProfileInfo> => {
    const result: UserProfileInfo[] = await connection("Cookenu_User")
        .where({ email })

    return result[0]
}