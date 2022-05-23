import { NotFound } from "../errors/CustomError"
import { GetUserOutput, InterfaceUserDatabase } from "../models/User"

export class UserBusiness {
    constructor(
        private userDatabase: InterfaceUserDatabase
    ) { }

    public getUserById = async (id: string): Promise<GetUserOutput> => {
        const user: GetUserOutput = await this.userDatabase.selectUserById(id)

        if (!user) {
            throw new NotFound("Usuário não encontrado")
        }

        return user
    }
}