import { User, GetUserByEmailOutput } from '../model/User'
import { BaseDatabase } from './BaseDatabase'

export class UserDatabase extends BaseDatabase {
    private USER_TABLE = "labook_users"

    public getUserByEmail = async (email: string): Promise<GetUserByEmailOutput> => {
        try {
            const result: GetUserByEmailOutput[] = await this.connection(this.USER_TABLE)
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
}