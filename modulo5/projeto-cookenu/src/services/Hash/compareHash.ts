import { compareSync } from "bcryptjs"

export const compareHash = (password: string, cypherPassword: string): boolean => {
    return compareSync(password, cypherPassword)
}