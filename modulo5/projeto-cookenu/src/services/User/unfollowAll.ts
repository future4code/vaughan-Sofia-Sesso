import { connection } from "../../connection"

export const unfollowAll = async (followerId: string): Promise<void> => {
    await connection("Cookenu_User_Following")
        .delete()
        .where({ follower_id: followerId })
}