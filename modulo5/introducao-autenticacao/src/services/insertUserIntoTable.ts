import { connection } from '../connection'

export const insertUserIntoTable = async (id: string, email: string, password: string): Promise<void> => {
    await connection("introducao_autenticacao_Users")
        .insert({
            id, email, password
        })
}