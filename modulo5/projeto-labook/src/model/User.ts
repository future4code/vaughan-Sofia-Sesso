export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) { }
}

export interface SignupInputDTO {
    name: string
    email: string
    password: string
}[]

export interface GetUserByEmailOutput {
    id: string
    name: string
    email: string
    password: string
}