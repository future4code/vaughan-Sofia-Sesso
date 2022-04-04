export const verificaCPF = (cpf: string): boolean => {
    const arrayCpf: string[] = cpf.split("").filter((item: string) => {
        return item !== "." && item !== "-"
    })

    const comparaNumeros = (numero: string, i: number, array: string[]): boolean => {
        return numero === array[0]
    }

    if (arrayCpf.every(comparaNumeros)) {
        return false
    }

    let valorMultiplicado: number = 10
    let totalPenultimoDV: number = 0
    for (let i: number = 0; i < 9; i++) {
        totalPenultimoDV = totalPenultimoDV + Number(arrayCpf[i]) * valorMultiplicado
        valorMultiplicado--
    }

    totalPenultimoDV = totalPenultimoDV % 11
    if (totalPenultimoDV > 1) {
        totalPenultimoDV = 11 - totalPenultimoDV
    } else {
        totalPenultimoDV = 0
    }

    valorMultiplicado = 11
    let totalUltimoDV: number = 0
    for (let i: number = 0; i < 10; i++) {
        totalUltimoDV = totalUltimoDV + Number(arrayCpf[i]) * valorMultiplicado
        valorMultiplicado--
    }

    totalUltimoDV = totalUltimoDV % 11
    if (totalUltimoDV > 1) {
        totalUltimoDV = 11 - totalUltimoDV
    } else {
        totalUltimoDV = 0
    }

    if (totalPenultimoDV === Number(arrayCpf[9]) && totalUltimoDV === Number(arrayCpf[10])) {
        return true
    } else {
        return false
    }
}