import express, { Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { Transaction, UserAccount, accounts } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// CRIAR CONTA:
app.post("/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const { name, cpf, birthDate } = req.body
        const regexCpf = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
        const regexDate = /^\d{2}\/\d{2}\/\d{4}$/
        const todayDate = new Date().getFullYear()
        const age = todayDate - new Date(birthDate).getFullYear()

        const verifyCpfDuplicate = accounts.some((account: UserAccount) => {
            if (account.cpf === cpf) {
                return true
            }
        })

        const newAccount: UserAccount = {
            name,
            cpf,
            birthDate,
            balance: 0,
            transactions: []
        }

        if (cpf.match(regexCpf) === null) {
            errorCode = 422
            throw new Error("CPF inválido")
        } else if (verifyCpfDuplicate) {
            errorCode = 409
            throw new Error("CPF já cadastrado")
        } else if (typeof name !== 'string') {
            errorCode = 422
            throw new Error("Nome inválido")
        } else if (birthDate.match(regexDate) === null) {
            errorCode = 422
            throw new Error("Data de nascimento inválida")
        } else if (age < 18) {
            errorCode = 422
            throw new Error("Idade precisa ser maior que 18")
        } else {
            const updatedAccounts = [...accounts, newAccount]
            console.log(newAccount)
            console.table(updatedAccounts)
            console.log(age)

            res.status(200).send("Usuário criado com sucesso")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// VISUALIZAR TODOS AS CONTAS:
app.get("/accounts", (req: Request, res: Response) => {
    res.status(200).send(accounts)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando no http://localhost:${address.port}`)
    } else {
        console.error("Falha ao iniciar o servidor")
    }
})