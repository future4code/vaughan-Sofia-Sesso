import { Request, Response } from 'express'
import { generateId } from '../../services/generateId'
import { User } from '../../entities/User'
import { createHash } from '../../services/Hash/createHash'
import { createUser } from '../../services/User/createUser'
import { generateToken } from '../../services/Token/generateToken'
import { getUserByEmail } from '../../services/User/getUserByEmail'
import { UserProfileInfo, USER_ROLE } from '../../types'

export const signup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, role } = req.body

        const id: string = generateId()

        const verifyEmail: UserProfileInfo = await getUserByEmail(email)

        if (!name) {
            res.statusCode = 422
            throw new Error("Campo 'nome' vazio")
        } else if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido")
        } else if (!password || password.length < 6) {
            res.statusCode = 422
            throw new Error("Senha inválida")
        } else if (verifyEmail) {
            res.statusCode = 409
            throw new Error("Email já cadastrado")
        } else if (role.toUpperCase() !== USER_ROLE.ADMIN && role.toUpperCase() !== USER_ROLE.NORMAL) {
            res.statusCode = 422
            throw new Error("Tipo de usuário inválido")
        }

        const cypherPassword: string = createHash(password)

        const user: User = new User(id, name, email, cypherPassword, role.toUpperCase())

        await createUser(
            user.getId(),
            user.getName(),
            user.getEmail(),
            user.getPassword(),
            user.getRole()
        )

        const token: string = generateToken({ id, role: role.toUpperCase() })

        res.status(201).send({ access_token: token })
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}