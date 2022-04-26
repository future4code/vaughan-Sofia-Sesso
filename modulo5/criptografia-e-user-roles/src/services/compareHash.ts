import { compareSync } from "bcryptjs"

export const compareHash = (plainText: string, cypherText: string): boolean => {
    return compareSync(plainText, cypherText)
}