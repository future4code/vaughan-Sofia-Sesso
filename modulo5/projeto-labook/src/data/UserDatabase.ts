import { User, GetUserOutput, InterfaceUserDatabase, AddFriendInput, getFriendshipOutput } from '../model/User'
import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase implements InterfaceUserDatabase {
    private USER_TABLE = "labook_users"
    private FRIENDSHIP_TABLE = "labook_friendships"

    public getUserByEmail = async (email: string): Promise<GetUserOutput> => {
        try {
            const result: GetUserOutput[] = await this.connection(this.USER_TABLE)
                .where({ email })

            return result[0]
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

    public getUserById = async (id: string): Promise<GetUserOutput> => {
        try {
            const result: GetUserOutput[] = await this.connection(this.USER_TABLE)
                .where({ id })

            return result[0]
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

    public insertUser = async (user: User): Promise<void> => {
        try {
            await this.connection(this.USER_TABLE)
                .insert(user)
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

    public insertFriendship = async (input: AddFriendInput): Promise<void> => {
        try {
            await this.connection(this.FRIENDSHIP_TABLE)
                .insert({
                    id: input.id,
                    user_id: input.userId,
                    friend_id: input.friendId
                })
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }

    public getFriendship = async (userId: string, friendId: string): Promise<getFriendshipOutput> => {
        try {
            const friendship: getFriendshipOutput[] = await this.connection(this.FRIENDSHIP_TABLE)
                .select('user_id as userId', 'friend_id as friendId')
                .where({ user_id: userId })
                .andWhere({ friend_id: friendId })
                .orWhere({ user_id: friendId })
                .andWhere({ friend_id: userId })

            return friendship[0]
        }
        catch (err: any) {
            if (err instanceof Error) {
                throw new Error(err.message)
            } else {
                throw new Error(err.sqlMessage)
            }
        }
    }
}