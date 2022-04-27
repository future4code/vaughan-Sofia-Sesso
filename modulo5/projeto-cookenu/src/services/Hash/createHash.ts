import { genSaltSync, hashSync } from "bcryptjs"

const cost = Number(process.env.BCRYPT_COST)

export const createHash = (password: string): string => {
    const salt: string = genSaltSync(cost)
    const cypherText: string = hashSync(password, salt)

    return cypherText
}