export const verificaCPF = (cpf: string) => {
    const arrayNumeros = cpf.replace(/./g, "")
    return arrayNumeros
}