export default function imprimeInfoDosValores(valor1: number, valor2: number): void {
    const som: number = valor1 + valor2
    const sub: number = valor1 - valor2
    const mul: number = valor1 * valor2
    const div: number = valor1 / valor2

    const info: { soma: number, subtracao: number, multiplicacao: number, divisao: number } = {
        soma: som,
        subtracao: sub,
        multiplicacao: mul,
        divisao: div
    }

    console.log(info)
}