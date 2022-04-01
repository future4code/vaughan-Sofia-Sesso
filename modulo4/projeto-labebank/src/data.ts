export type Transaction = {
    value: number,
    date: string,
    description: string
}

export type UserAccount = {
    name: string,
    cpf: string,
    birthDate: string,
    balance: number,
    transactions: Transaction[]
}

export const accounts: UserAccount[] = [
    {
        name: "Luke Skywalker",
        cpf: "123.456.789-01",
        birthDate: "25/05/1983",
        balance: 11890,
        transactions: [
            {
                value: 850,
                date: "01/02/2022",
                description: "Depósito de dinheiro"
            },
            {
                value: 110,
                date: "24/12/2021",
                description: "Depósito de dinheiro"
            }
        ]
    },
    {
        name: "Leia Skywalker",
        cpf: "123.456.789-02",
        birthDate: "25/05/1983",
        balance: 50450,
        transactions: [
            {
                value: 1000,
                date: "24/03/2022",
                description: "Depósito de dinheiro"
            },
            {
                value: 500,
                date: "02/03/2022",
                description: "Depósito de dinheiro"
            }
        ]
    },
    {
        name: "Han Solo",
        cpf: "123.456.789-03",
        birthDate: "21/05/1980",
        balance: 5030,
        transactions: [
            {
                value: 150,
                date: "25/03/2022",
                description: "Depósito de dinheiro"
            }
        ]
    },
    {
        name: "Chewbacca",
        cpf: "123.456.789-04",
        birthDate: "25/05/1977",
        balance: 7250,
        transactions: [
            {
                value: 456,
                date: "26/01/2022",
                description: "Depósito de dinheiro"
            },
            {
                value: 145,
                date: "15/01/2022",
                description: "Depósito de dinheiro"
            }
        ]
    },
    {
        name: "R2D2",
        cpf: "123.456.789-05",
        birthDate: "19/05/1999",
        balance: 56740,
        transactions: [
            {
                value: 6000,
                date: "01/04/2022",
                description: "Depósito de dinheiro"
            }
        ]
    },
    {
        name: "C3PO",
        cpf: "123.456.789-06",
        birthDate: "16/05/2002",
        balance: 8900,
        transactions: [
            {
                value: 123,
                date: "23/02/2022",
                description: "Depósito de dinheiro"
            },
            {
                value: 456,
                date: "15/02/2022",
                description: "Depósito de dinheiro"
            }
        ]
    },
]