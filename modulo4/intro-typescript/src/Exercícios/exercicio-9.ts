export default function validaPessoa(idade: number, ensinoMedio: boolean, horasPorSemana: number, tipoDeCurso: string): boolean {
    if (idade >= 18 && ensinoMedio && (horasPorSemana >= 40 && tipoDeCurso === "integral") || (horasPorSemana >= 20 && tipoDeCurso === "noturno")) {
        return true
    } else {
        return false
    }
}