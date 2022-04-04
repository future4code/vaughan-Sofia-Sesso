enum Role {
    ADMIN = "Admin",
    USER = "User"
}

type UserType = {
    name: string,
    email: string,
    role: Role
}

export const users: UserType[] = [
    { name: "Rogério", email: "roger@email.com", role: Role.USER },
    { name: "Ademir", email: "ademir@email.com", role: Role.ADMIN },
    { name: "Aline", email: "aline@email.com", role: Role.USER },
    { name: "Jéssica", email: "jessica@email.com", role: Role.USER },
    { name: "Adilson", email: "adilson@email.com", role: Role.USER },
    { name: "Carina", email: "carina@email.com", role: Role.ADMIN }
]

export const adminEmails = (array: UserType[]): string[] => {
    return array.filter((user: UserType) => {
        return user.role === Role.ADMIN
    }).map((user: UserType) => {
        return user.email
    })
}