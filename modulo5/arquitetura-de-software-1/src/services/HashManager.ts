import { compareSync, genSaltSync, hashSync } from "bcryptjs"

const cost = Number(process.env.BCRYPT_COST)

export class HashManager {
    createHash = (password: string) => {
        const salt: string = genSaltSync(cost)
        const cypherText: string = hashSync(password, salt)

        return cypherText
    }

    compareHash = (password: string, cypherPassword: string) => {
        return compareSync(password, cypherPassword)
    }
}