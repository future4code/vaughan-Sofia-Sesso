export enum Sigla {
    AC = "AC",
    DC = "DC"
}

enum IdadeHistorica {
    PREHITORIA = "Pré-história",
    IDADEANTIGA = "Idade Antiga",
    IDADEMEDIA = "Idade Média",
    IDADEMODERNA = "Idade Moderna",
    IDADECONTEMPORANEA = "Idade Contemporânea"
}

export const determinaIdadeHistorica = (ano: number, sigla?: Sigla): string => {
    if (ano >= 0) {
        if (ano > 4000 && sigla === Sigla.AC) {
            return IdadeHistorica.PREHITORIA
        } else if ((ano <= 4000 && sigla === Sigla.AC) || (ano < 476 && sigla === Sigla.DC)) {
            return IdadeHistorica.IDADEANTIGA
        } else if (ano >= 476 && ano < 1453 && sigla === Sigla.DC) {
            return IdadeHistorica.IDADEMEDIA
        } else if (ano >= 1453 && ano < 1789 && sigla === Sigla.DC) {
            return IdadeHistorica.IDADEMODERNA
        } else if (ano >= 1789 && ano <= 2022 && sigla === Sigla.DC) {
            return IdadeHistorica.IDADECONTEMPORANEA
        } else {
            return "Aconteceu um erro"
        }
    } else {
        return "Aconteceu um erro"
    }

}