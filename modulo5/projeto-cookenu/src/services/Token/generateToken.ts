import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../../types"

export const generateToken = (input: AuthenticationData): string => {
    const token = jwt.sign(
        {
            id: input.id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN
        }
    )

    return token
}