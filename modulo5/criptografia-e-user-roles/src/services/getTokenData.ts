import * as jwt from "jsonwebtoken"
import { AuthenticationData } from '../types'

export const getTokenData = (token: string): AuthenticationData | null => {
    try {
        const tokenData = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as any

        return tokenData
    }
    catch (err: any) {
        console.log(err)
        return null
    }
}