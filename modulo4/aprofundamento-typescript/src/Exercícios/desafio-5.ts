type Consulta = {
    nome: string,
    idade: number,
    dataDaConsulta: string
}

export const consultas: Consulta[] = [
    { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
    { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
    { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
    { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

export const pacientesEmOrdemAlfabetica = (array: Consulta[]): Consulta[] => {
    return array.sort(function (primeiraConsulta: Consulta, segundaConsulta: Consulta) {
        if (primeiraConsulta.nome < segundaConsulta.nome) {
            return -1
        } else if (primeiraConsulta.nome > segundaConsulta.nome) {
            return 1
        } else {
            return 0
        }
    })
}