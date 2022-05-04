import { connection } from '../connection'
import { User } from '../types'

export const getUserById = async (id: string): Promise<User> => {
    const result: User[] = await connection("introducao_autenticacao_Users")
        .where({ id })

    return result[0]
}