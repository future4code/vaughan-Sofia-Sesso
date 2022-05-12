import { Request, Response } from 'express'
import { createHash } from '../../services/Hash/createHash'
import transporter from '../../services/mailTransportes'
import { getUserByEmail } from '../../services/User/getUserByEmail'
import { updateUserPassword } from '../../services/User/updateUserPassword'
import { UserProfileInfo } from '../../types'

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, newPassword } = req.body

        const user: UserProfileInfo = await getUserByEmail(email)

        if (!user) {
            res.statusCode = 404
            throw new Error("Email não existente")
        }

        if (!newPassword || newPassword.length < 6) {
            res.statusCode = 422
            throw new Error("Senha inválida")
        }

        const cypherPassword: string = createHash(newPassword)

        await updateUserPassword(email, cypherPassword)

        const emailInfo = await transporter.sendMail({
            from: `${process.env.NODEMAILER_USER}`,
            to: user.email,
            subject: "Alteração da senha",
            text: `Olá, ${user.name}, sua senha foi alterada com sucesso!`,
            html: `<p>
                Olá, ${user.name}, sua senha foi alterada com sucesso!
            </p>`
        })

        res.status(200).send({ emailInfo, message: "Senha alterada com sucesso!" })
    }
    catch (err: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: err.message })
        }
    }
}