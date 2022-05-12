import { connection } from "../../connection"

export const unfollowUserById = async (followerId: string, userToFollowId: string): Promise<void> => {
    await connection("Cookenu_User_Following")
        .delete()
        .where({ follower_id: followerId })
        .andWhere({ user_to_follow_id: userToFollowId })
}