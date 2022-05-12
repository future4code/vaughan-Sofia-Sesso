import { connection } from "../../connection"
import { generateId } from "../generateId"

export const followUserById = async (followerId: string, userToFollowId: string): Promise<void> => {
    const id: string = generateId()

    await connection("Cookenu_User_Following")
        .insert({
            id,
            follower_id: followerId,
            user_to_follow_id: userToFollowId
        })
}