import * as jwt from "jsonwebtoken"

export const getTokenData = (token: string) => {
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