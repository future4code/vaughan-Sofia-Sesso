// a) A entrada da função é um array de numbers e a saída é um objeto com 3 propriedades do tipo number.

// b) A variável numerosOrdenados é um array de numbers, os parâmetros a e b dentro do sort são do tipo number, a variável soma é do tipo number,
// e a variável estatisticas é um objeto com 3 propriedades do tipo number.

type AmostraDeDados = {
    numeros: number[],
    obterEstatisticas: (numeros: number[]) => { maior: number, menor: number, media: number }
}

export const amostra1: AmostraDeDados = {
    numeros: [2, 7, 5, 9, 4, 3],
    obterEstatisticas: (numeros: number[]) => {
        const numerosOrdenados: number[] = numeros.sort(
            (a: number, b: number) => a - b
        )

        let soma: number = 0

        for (let num of numeros) {
            soma += num
        }

        const estatisticas: { maior: number, menor: number, media: number } = {
            maior: numerosOrdenados[numeros.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numeros.length
        }

        return estatisticas
    }
}

export const estatisticasDaAmostra1 = amostra1.obterEstatisticas(amostra1.numeros)

// function obterEstatisticas(numeros: number[]): { maior: number, menor: number, media: number } {

//     const numerosOrdenados: number[] = numeros.sort(
//         (a: number, b: number) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas: { maior: number, menor: number, media: number } = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }