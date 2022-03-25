enum Meses {
    JANEIRO = "Janeiro",
    FEVEREIRO = "Fevereiro",
    MARCO = "Março",
    ABRIL = "Abril",
    MAIO = "Maio",
    JUNHO = "Junho",
    JULHO = "Julho",
    AGOSTO = "Agosto",
    SETEMBRO = "Setembro",
    OUTUBRO = "Outubro",
    NOVEMBRO = "Novembro",
    DEZEMBRO = "Dezembro"
}

export const retornaDiaDoNascimento = (nome: string, data: string): string => {
    const dia: string = data.slice(0, 2).replace("0", "")
    const mes: string = data.slice(3, 5).replace("0", "")
    const ano: string = data.slice(6, 10)

    switch (mes) {
        case "1":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.JANEIRO} do ano de ${ano}`
        case "2":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.FEVEREIRO} do ano de ${ano}`
        case "3":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.MARCO} do ano de ${ano}`
        case "4":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.ABRIL} do ano de ${ano}`
        case "5":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.MAIO} do ano de ${ano}`
        case "6":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.JUNHO} do ano de ${ano}`
        case "7":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.JULHO} do ano de ${ano}`
        case "8":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.AGOSTO} do ano de ${ano}`
        case "9":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.SETEMBRO} do ano de ${ano}`
        case "10":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.OUTUBRO} do ano de ${ano}`
        case "11":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.NOVEMBRO} do ano de ${ano}`
        case "12":
            return `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${Meses.DEZEMBRO} do ano de ${ano}`
        default:
            return "Mês inválido"
    }
}