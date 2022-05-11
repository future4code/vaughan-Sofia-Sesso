import { GetUserOutput, InterfaceUserDatabase } from "../models/User"
import BaseDataBase from "./BaseDatabase"

export class UserDatabase extends BaseDataBase implements InterfaceUserDatabase {
    private TABLE_NAME = "User_Arq"

    public selectUserById = async (id: string): Promise<GetUserOutput> => {
        try {
            const result: GetUserOutput[] = await BaseDataBase.connection(this.TABLE_NAME)
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
}