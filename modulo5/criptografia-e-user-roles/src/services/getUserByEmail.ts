import { connection } from '../connection'
import { User } from '../types'

export const getUserByEmail = async (email: string): Promise<User> => {
    const result: User[] = await connection("introducao_autenticacao_Users")
        .where({ email })

    return result[0]
}