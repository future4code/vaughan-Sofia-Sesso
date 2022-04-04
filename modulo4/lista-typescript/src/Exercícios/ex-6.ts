type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

export const clientes: Cliente[] = [
    { cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
    { cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
    { cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
    { cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
    { cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
    { cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

export const acharClientesComSaldoNegativo = (array: Cliente[]): Cliente[] => {
    const clientesComSaldoNegativo: Cliente[] = array.map((cliente: Cliente) => {
        const totalDebito: number = cliente.debitos.reduce((valorAtual: number, proximoValor: number) => valorAtual + proximoValor, 0)

        return {
            ...cliente,
            saldoTotal: cliente.saldoTotal - totalDebito,
            debitos: []
        }
    }).filter((cliente: Cliente) => {
        return cliente.saldoTotal < 0
    })

    return clientesComSaldoNegativo
}