import { genSaltSync, hashSync } from "bcryptjs"

const rounds = Number(process.env.BCRYPT_COST)

export const createHash = (password: string): string => {
    const salt: string = genSaltSync(rounds)
    const cypherText: string = hashSync(password, salt)

    return cypherText
}