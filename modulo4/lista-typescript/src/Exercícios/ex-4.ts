enum Setores {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

type Colaborador = {
    nome: string,
    salario: number,
    setor: Setores,
    presencial: boolean
}

export const colaboradores: Colaborador[] = [
    { nome: "Marcos", salario: 2500, setor: Setores.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: Setores.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: Setores.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: Setores.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: Setores.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: Setores.MARKETING, presencial: true }
]

export const colaboradoresMarketingPresencial = (array: Colaborador[]): Colaborador[] => {
    return array.filter((item: Colaborador) => {
        return item.setor === Setores.MARKETING && item.presencial
    })
}