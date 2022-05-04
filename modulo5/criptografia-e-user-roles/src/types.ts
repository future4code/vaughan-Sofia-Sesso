export enum ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export type AuthenticationData = {
    id: string
    role: ROLES
}

export type User = {
    id: string
    email: string
    password: string
    role: ROLES
}