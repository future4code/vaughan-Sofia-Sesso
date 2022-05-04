import { GetUserByEmailOutput, InterfaceUserDatabase, LoginInputDTO, User } from '../model/User'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { SignupInputDTO } from '../model/User'

export class UserBusiness {
    constructor(
        private userDatabase: InterfaceUserDatabase
    ) { }

    public signup = async (input: SignupInputDTO): Promise<string> => {
        const { name, email, password } = input

        const registeredEmail: GetUserByEmailOutput = await this.userDatabase.getUserByEmail(email)

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

        const id: string = IdGenerator.generateId()

        const cypherPassword: string = HashManager.createHash(password)

        const user: User = new User(id, name, email, cypherPassword)

        await this.userDatabase.insertUser(user)

        const token: string = Authenticator.generateToken({ id })

        return token
    }

    public login = async (input: LoginInputDTO): Promise<string> => {
        const { email, password } = input

        const registeredUser: GetUserByEmailOutput = await this.userDatabase.getUserByEmail(email)

        if (!email || !password) {
            throw new Error("Um ou mais campos vazios")
        }

        if (!registeredUser) {
            throw new Error("Email não encontrado")
        }

        const isPasswordCorrect: boolean = HashManager.compareHash(password, registeredUser.password)

        if (!isPasswordCorrect) {
            throw new Error("Senha incorreta")
        }

        const token: string = Authenticator.generateToken({ id: registeredUser.id })

        return token
    }
}