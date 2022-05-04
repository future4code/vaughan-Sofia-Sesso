import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

export class Authenticator {
    generateToken = (payload: AuthenticationData) => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        )
    }

    getTokenData = (token: string): AuthenticationData | null => {
        try {
            const tokenData = jwt.verify(
                token, process.env.JWT_KEY as string
            ) as AuthenticationData
            return tokenData

        } catch (err) {
            console.log(err)
            return null
        }
    }
}