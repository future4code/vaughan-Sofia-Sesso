import express, { request, Request, Response } from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { Transaction, UserAccount, accounts } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// VISUALIZAR TODOS AS CONTAS:
app.get("/accounts", (req: Request, res: Response) => {
    try {
        res.status(200).send(accounts)
    }
    catch (err: any) {
        res.status(500).send("Erro no servidor")
    }
})

// VISUALIZAR SALDO USANDO CPF DO USUÁRIO:
app.get("/accounts/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const userCpf: string = req.params.cpf

        const verifyCpf: boolean = accounts.some((account: UserAccount) => {
            if (account.cpf === userCpf) {
                return true
            }
        })

        if (verifyCpf) {
            const userBalance = accounts.filter((account: UserAccount) => {
                return account.cpf === userCpf
            }).map((account: UserAccount) => {
                return account.balance
            })

            res.status(200).send(userBalance)
        } else {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// CRIAR CONTA:
app.post("/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const { name, cpf, birthDate } = req.body
        const regexCpf = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/
        const regexDate = /^\d{2}\/\d{2}\/\d{4}$/
        const today = new Date()
        let age: number = today.getFullYear() - new Date(birthDate).getFullYear()
        const monthDifference: number = today.getMonth() - new Date(birthDate).getMonth()

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < new Date(birthDate).getDate())) {
            age = age - 1
        }

        const verifyCpfDuplicate: boolean = accounts.some((account: UserAccount) => {
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
            const updatedAccounts: UserAccount[] = [...accounts, newAccount]

            res.status(201).send("Usuário criado com sucesso")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// PAGAR CONTA USANDO CPF:
app.post("/accounts/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const userCpf: string = req.params.cpf
        const { value, dueDate } = req.body
        const today = new Date().getTime()
        const dueDateTimeStamp = new Date(dueDate).getTime()

        const newTransaction: Transaction = {
            value,
            date: dueDate,
            description: "Pagamento adicionado"
        }

        const verifyCpf = accounts.some((account: UserAccount) => {
            if (account.cpf === userCpf && account.balance > value) {
                return true
            } else if (account.cpf === userCpf && account.balance < value) {
                errorCode = 422
                throw new Error(`Valor do pagamento é maior do que o valor do saldo na conta de ${account.name}`)
            }
        })

        if (!verifyCpf) {
            errorCode = 404
            throw new Error(`Usuário com CPF ${userCpf} não encontrado`)
        } else if (typeof value !== 'number' || value <= 0) {
            errorCode = 422
            throw new Error("Campo 'value' inválido")
        } else if (today > dueDateTimeStamp) {
            errorCode = 422
            throw new Error("Data inválida")
        } else {
            const addPaymentToTransactions = accounts.filter((account: UserAccount) => {
                return account.cpf === userCpf
            }).map((account: UserAccount) => {
                return {
                    ...account,
                    transactions: [...account.transactions, newTransaction]
                }
            })

            res.status(200).send(`Valor adicionado à conta de ${userCpf}`)
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// TRANFERIR ENTRE CONTAS:
app.post("/accounts/user/:cpf", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const senderCpf: string = req.params.cpf
        const { senderName, recipientName, recipientCpf, value } = req.body
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = today.getFullYear()
        const todayFormatted = dd + '/' + mm + '/' + yyyy

        const verifySender = accounts.some((account: UserAccount) => {
            if (account.name === senderName && account.cpf === senderCpf && account.balance > value) {
                return true
            } else {
                errorCode = 422
                throw new Error(`Valor da transferência é maior do que o valor do saldo na conta de ${account.name}`)
            }
        })

        const verifyRecipient = accounts.some((account: UserAccount) => {
            if (account.name === recipientName && account.cpf === recipientCpf) {
                return true
            }
        })

        if (verifySender && verifyRecipient) {
            for (let user of accounts) {
                if (user.cpf === senderCpf) {
                    user.transactions.push({
                        value: value,
                        date: todayFormatted,
                        description: "Tranferência feita"
                    })
                } else if (user.cpf === recipientCpf) {
                    user.transactions.push({
                        value: value,
                        date: todayFormatted,
                        description: "Depósito de dinheiro"
                    })
                }
            }
            res.status(200).send("Tranferência realizada com sucesso")
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// ADICIONAR VALOR AO SALDO USANDO NOME E CPF:
app.put("/accounts", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const { name, cpf, value } = req.body
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = today.getFullYear()
        const todayFormatted = dd + '/' + mm + '/' + yyyy

        const newTransaction: Transaction = {
            value,
            date: todayFormatted,
            description: "Depósito de dinheiro"
        }

        const verifyName: boolean = accounts.some((account: UserAccount) => {
            if (account.name === name) {
                return true
            }
        })

        const verifyCpf: boolean = accounts.some((account: UserAccount) => {
            if (account.cpf === cpf) {
                return true
            }
        })

        if (!verifyName) {
            errorCode = 404
            throw new Error(`Usuário com nome ${name} não encontrado`)
        } else if (!verifyCpf) {
            errorCode = 404
            throw new Error(`Usuário com CPF ${cpf} não encontrado`)
        } else if (typeof value !== 'number' || value <= 0) {
            errorCode = 422
            throw new Error("Campo 'value' inválido")
        } else {
            const addValueToBalance = accounts.filter((account: UserAccount) => {
                return account.cpf === cpf
            }).map((account: UserAccount) => {
                return {
                    ...account,
                    balance: account.balance + value,
                    transactions: [...account.transactions, newTransaction]
                }
            })

            res.status(200).send(`Valor adicionado à conta de ${name}`)
        }
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

// ATUALIZAR SALDO DO CLIENTE:
app.put("/accounts/update", (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const today = new Date()
        const dd = String(today.getDate()).padStart(2, '0')
        const mm = String(today.getMonth() + 1).padStart(2, '0')
        const yyyy = today.getFullYear()
        const todayFormatted = dd + '/' + mm + '/' + yyyy

        for (let user of accounts) {
            const verifyDates = user.transactions.some((transaction: Transaction) => {
                if (new Date(transaction.date).getTime() <= new Date(todayFormatted).getTime()) {
                    return true
                }
            })

            let transactionValue: number = 0
            if (verifyDates) {
                for (let i: number = 0; i < user.transactions.length; i++) {
                    if (new Date(user.transactions[i].date).getTime() <= new Date(todayFormatted).getTime() &&
                        user.transactions[i].description === "Pagamento adicionado") {
                        transactionValue = transactionValue + user.transactions[i].value
                    }
                }
            }
        }
        res.status(200).send("Saldos atualizados")
    }
    catch (err: any) {
        res.status(errorCode).send(err.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Servidor rodando no http://localhost:${address.port}`)
    } else {
        console.error("Falha ao iniciar o servidor")
    }
})