export const retornaQuantidadeDeAnagramas = (palavra: string): number => {
    let total: number = 1

    for (let i: number = 1; i <= palavra.length; i++) {
        total = total * i
    }

    return total
}