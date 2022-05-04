export type AuthenticationData = {
    id: string
}

export type User = {
    id: AuthenticationData
    email: string
    password: string
}