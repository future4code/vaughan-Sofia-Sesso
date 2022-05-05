import { AddFriendInput, AddFriendInputDTO, GetUserOutput, InterfaceUserDatabase, LoginInputDTO, User } from '../model/User'
import { Authenticator } from '../services/Authenticator'
import { HashManager } from '../services/HashManager'
import { IdGenerator } from '../services/IdGenerator'
import { SignupInputDTO } from '../model/User'
import { Conflict, NotFound, Unauthorized, UnprocessableEntity } from '../Error/Error'
import { AuthenticationData } from '../types/AuthenticationData'

export class UserBusiness {
    constructor(
        private userDatabase: InterfaceUserDatabase
    ) { }

    public signup = async (input: SignupInputDTO): Promise<string> => {
        const { name, email, password } = input

        const registeredEmail: GetUserOutput = await this.userDatabase.getUserByEmail(email)

        if (registeredEmail) {
            throw new Conflict("Email já cadastrado")
        }

        if (!name) {
            throw new UnprocessableEntity("Campo 'nome' vazio")
        }

        if (!email || email.indexOf("@") === -1) {
            throw new UnprocessableEntity("Email inválido")
        }

        if (!password || password.length < 6) {
            throw new UnprocessableEntity("Senha inválida")
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

        const registeredUser: GetUserOutput = await this.userDatabase.getUserByEmail(email)

        if (!email || !password) {
            throw new UnprocessableEntity("Um ou mais campos vazios")
        }

        if (!registeredUser) {
            throw new NotFound("Usuário não encontrado")
        }

        const isPasswordCorrect: boolean = HashManager.compareHash(password, registeredUser.password)

        if (!isPasswordCorrect) {
            throw new Unauthorized("Senha incorreta")
        }

        const token: string = Authenticator.generateToken({ id: registeredUser.id })

        return token
    }

    public addFriend = async (input: AddFriendInputDTO): Promise<string> => {
        const { token, friendId } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        const registeredUser: GetUserOutput = await this.userDatabase.getUserById(friendId)

        if (!registeredUser) {
            throw new NotFound("Usuário não encontrado")
        }

        const id = IdGenerator.generateId()

        const databaseInput: AddFriendInput = {
            id,
            userId: authentication.id,
            friendId
        }

        await this.userDatabase.insertFriendship(databaseInput)

        return registeredUser.name
    }
}