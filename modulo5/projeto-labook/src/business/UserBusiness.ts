import { AddFriendInput, ManagingFriendshipInputDTO, getFriendshipOutput, GetUserOutput, InterfaceUserDatabase, LoginInputDTO, User } from '../model/User'
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

    public addFriend = async (input: ManagingFriendshipInputDTO): Promise<string> => {
        const { token, friendId } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        const registeredUser: GetUserOutput = await this.userDatabase.getUserById(friendId)

        if (!registeredUser) {
            throw new NotFound("Usuário não encontrado")
        }

        if (registeredUser.id === authentication.id) {
            throw new Conflict("Usuário não pode adicionar sua própria conta à sua lista de amigos")
        }

        const friendship: getFriendshipOutput = await this.userDatabase.getFriendship(authentication.id, friendId)

        if (friendship) {
            throw new Conflict(`Usuário já é amigo de ${registeredUser.name}`)
        }

        // A amizade é adicionada duas vezes, na primeira vez é com o id do usuário sendo o userId na tabela e o id do amigo
        // sendo friendId. Na segunda vez é com o id do amigo sendo o userId e o id do usuário sendo friendId.

        const idForUserFriendship: string = IdGenerator.generateId()
        const idForFriendFriendship: string = IdGenerator.generateId()

        const databaseInput: AddFriendInput = {
            idForUserFriendship,
            idForFriendFriendship,
            userId: authentication.id,
            friendId
        }

        await this.userDatabase.insertFriendship(databaseInput)

        return registeredUser.name
    }

    public unfriend = async (input: ManagingFriendshipInputDTO): Promise<string> => {
        const { token, friendId } = input

        const authentication = Authenticator.getTokenData(token) as AuthenticationData

        if (!authentication) {
            throw new Unauthorized("Token inválido")
        }

        const registeredUser: GetUserOutput = await this.userDatabase.getUserById(friendId)

        if (!registeredUser) {
            throw new NotFound("Usuário não encontrado")
        }

        if (registeredUser.id === authentication.id) {
            throw new Conflict("Usuário não pode remover sua própria conta da sua lista de amigos")
        }

        const friendshipForUser: getFriendshipOutput = await this.userDatabase.getFriendship(authentication.id, friendId)
        const friendshipForFriend: getFriendshipOutput = await this.userDatabase.getFriendship(friendId, authentication.id)

        if (!friendshipForUser) {
            throw new Conflict(`Usuário não é amigo de ${registeredUser.name}`)
        }

        await this.userDatabase.deleteFriendship(friendshipForUser.id)
        await this.userDatabase.deleteFriendship(friendshipForFriend.id)

        return registeredUser.name
    }
}