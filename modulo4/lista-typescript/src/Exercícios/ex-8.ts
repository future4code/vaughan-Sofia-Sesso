export const precisaRenovarCarteira = (dataNascimento: string, dataEmissao: string): boolean => {
    const anoNascimento: number = new Date(dataNascimento).getFullYear()
    const anoEmissao: number = new Date(dataEmissao).getFullYear()
    const anoAtual: number = new Date().getFullYear()
    const idade: number = anoAtual - anoNascimento
    const idadeCarteira: number = anoAtual - anoEmissao

    if (idade <= 20 && idadeCarteira >= 5) {
        return true
    } else if (idade > 20 && idade <= 50 && idadeCarteira >= 10) {
        return true
    } else if (idade > 50 && idadeCarteira >= 15) {
        return true
    } else {
        return false
    }
}