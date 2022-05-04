import { User, USER_ROLES } from "../types"
import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
    public insertUser = async (
        id: string,
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
    ): Promise<void> => {
        await this.connection("User_Arq")
            .insert({
                id,
                name,
                email,
                password,
                role
            })
    }

    public getUserByEmail = async (email: string): Promise<User> => {
        const result: User[] = await this.connection("User_Arq")
            .where({ email })

        return result[0]
    }

    public getUserById = async (id: string): Promise<User> => {
        const result: User[] = await this.connection("User_Arq")
            .where({ id })

        return result[0]
    }

    public getAllUsers = async (): Promise<User[]> => {
        const result: User[] = await this.connection("User_Arq")

        return result
    }

    public deleteUserById = async (id: string): Promise<void> => {
        await this.connection("User_Arq")
            .delete()
            .where({ id })
    }
}