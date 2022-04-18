import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from '../types'

export const getUsersByName = async (req: Request, res: Response): Promise<void> => {
   try {
      const name: string = req.query.name as string

      const users: User[] = await selectAllUsers(name)

      if (!users.length) {
         res.statusCode = 404
         throw new Error("Nenhum usuário encontrado")
      }

      res.status(200).send(users)

   } catch (error: any) {
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectAllUsers(name: string): Promise<User[]> {
   const result: User[] = await connection("aula48_exercicio")
      .where('name', 'like', `%${name}%`)

   return result
}