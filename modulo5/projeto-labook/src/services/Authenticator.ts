import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationData"

export class Authenticator {
    static generateToken = (payload: AuthenticationData): string => {
        return jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
            }
        )
    }

    static getTokenData = (token: string): AuthenticationData | null => {
        try {
            return jwt.verify(
                token,
                process.env.JWT_KEY as string
            ) as AuthenticationData
        }
        catch (err) {
            console.log(err)
            return null
        }
    }
}