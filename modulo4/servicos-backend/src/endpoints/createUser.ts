import { Request, Response } from 'express'
import { getAddress } from '../services/getAddress'
import { connection } from '../connection'
import transporter from '../services/mailTransporter'
import { Address } from '../types'

export const createUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode: number = 500
    try {
        const { zipcode, number, complement } = req.body

        const address: Address | null = await getAddress(zipcode, number, complement)

        if (!address) {
            errorCode = 404
            throw new Error("Endereço não encontrado")
        } else {
            const addressWithId = {
                ...address,
                id: new Date().getTime()
            }

            await connection("aula_servico_backend")
                .insert(addressWithId)

            const emailInfo = await transporter.sendMail({
                from: `${process.env.NODEMAILER_USER}`,
                to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
                subject: "Desafio da aula de serviços no backend",
                text: "Descrição do objeto que eu usei para enviar este email.",
                html: `<p>
                    O objeto que eu utilizei para enviar esse email contém as propriedades "from" que indica de quem está sendo enviado o email, "to" que indica 
                    para quem vai ser enviado, "subject" que é o assunto do email, "text" que é o texto que aparece na versão minificada do email e "html" que é
                    o corpo do email.
                </p>`
            })

            res.status(200).send({ emailInfo, message: "Endereço cadastrado com sucesso!" })
        }
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(errorCode).send({ err, message: err.message })
        } else {
            res.status(errorCode).send("Ocorreu um erro inesperado")
        }
    }
}