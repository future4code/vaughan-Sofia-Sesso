import { connection } from '../connection'

export const deleteUserById = async (id: string): Promise<void> => {
    await connection("introducao_autenticacao_Users")
        .delete()
        .where({ id })
}