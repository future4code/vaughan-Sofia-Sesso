import { UserDatabase } from '../data/UserDatabase'
import { User } from '../model/User'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { SignupInputDTO } from '../model/User'

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase
    ) { }

    public signup = async (input: SignupInputDTO): Promise<string> => {
        const { name, email, password } = input

        const registeredEmail = await this.userDatabase.getUserByEmail(email)

        if (registeredEmail) {
            throw new Error("Email já cadastrado")
        }

        if (!name) {
            throw new Error("Campo 'nome' vazio")
        }

        if (!email || email.indexOf("@") === -1) {
            throw new Error("Email inválido")
        }

        if (!password || password.length < 6) {
            throw new Error("Senha inválida")
        }

        const id = IdGenerator.generateId()

        const cypherPassword = HashManager.createHash(password)

        const user: User = new User(id, name, email, cypherPassword)

        await this.userDatabase.insertUser(user)

        const token = Authenticator.generateToken({ id })

        return token
    }
}