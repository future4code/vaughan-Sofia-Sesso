import * as jwt from "jsonwebtoken"
import { AuthenticationData } from '../types'

const expiresIn = "1h"

export const generateToken = (id: AuthenticationData) => {
    const token = jwt.sign(
        {
            id
        },
        process.env.JWT_KEY as string,
        {
            expiresIn
        }
    )

    return token
}