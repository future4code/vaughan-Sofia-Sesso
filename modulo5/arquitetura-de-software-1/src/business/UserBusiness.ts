import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { AuthenticationData, User, USER_ROLES } from "../types"

const idGenerator: IdGenerator = new IdGenerator()
const hashManager: HashManager = new HashManager()
const authenticator: Authenticator = new Authenticator()
const userDatabase: UserDatabase = new UserDatabase()

export class UserBusiness {
    public createUser = async (name: string, email: string, password: string, role: USER_ROLES): Promise<any> => {
        if (!name || !email || !password || !role) {
            throw new Error("Um ou mais campos vazios")
        }

        const user: User = await userDatabase.getUserByEmail(email)

        if (user) {
            throw new Error("Email já cadastrado")
        }

        if (email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }

        if (password.length < 6) {
            throw new Error("Senha inválida")
        }

        const id: string = idGenerator.generateId()
        const cypherPassword: string = hashManager.createHash(password)

        await userDatabase.insertUser(id, name, email, cypherPassword, role)

        const token = authenticator.generateToken({ id, role })
        return token
    }

    public getUserByEmail = async (email: string, password: string): Promise<string> => {
        const user: User = await userDatabase.getUserByEmail(email)

        if (!email || !user) {
            throw new Error("Email inválido")
        }

        const isPasswordCorrect = hashManager.compareHash(password, user.password)

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const token = authenticator.generateToken({ id: user.id, role: user.role })

        return token
    }

    public getAllUsers = async (token: string): Promise<User[]> => {
        const authentication = authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Error("Token inválido")
        }

        const users = await userDatabase.getAllUsers()

        return users
    }

    public deleteUser = async (token: string, id: string): Promise<void> => {
        const authentication = authenticator.getTokenData(token) as AuthenticationData

        const user: User = await userDatabase.getUserById(id)

        if (!authentication) {
            throw new Error("Token inválido")
        }

        if (authentication.role !== USER_ROLES.ADMIN) {
            throw new Error("Usuário sem acesso")
        }

        if (!user) {
            throw new Error("Usuário não encontrado")
        }

        await userDatabase.deleteUserById(id)
    }
}