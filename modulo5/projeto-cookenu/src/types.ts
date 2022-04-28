export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type AuthenticationData = {
    id: string,
    role: USER_ROLE
}

export type UserProfileInfo = {
    id: string
    name: string
    email: string
    password: string
    role: USER_ROLE
}