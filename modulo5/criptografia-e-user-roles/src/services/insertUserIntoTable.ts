import { connection } from '../connection'
import { ROLES } from '../types'

export const insertUserIntoTable = async (id: string, email: string, password: string, role: ROLES): Promise<void> => {
    await connection("introducao_autenticacao_Users")
        .insert({
            id,
            email,
            password,
            role: role.toUpperCase()
        })
}