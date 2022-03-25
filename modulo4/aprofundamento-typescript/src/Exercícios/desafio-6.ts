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
        if (sigla === Sigla.AC) {
            if (ano > 4000) {
                return IdadeHistorica.PREHITORIA
            } else if (ano <= 4000) {
                return IdadeHistorica.IDADEANTIGA
            }
        } else if (sigla === Sigla.DC || sigla === undefined) {
            if (ano < 476) {
                return IdadeHistorica.IDADEANTIGA
            } else if (ano >= 476 && ano < 1453) {
                return IdadeHistorica.IDADEMEDIA
            } else if (ano >= 1453 && ano < 1789) {
                return IdadeHistorica.IDADEMODERNA
            } else if (ano >= 1789 && ano <= 2022) {
                return IdadeHistorica.IDADECONTEMPORANEA
            } else {
                return "Aconteceu um erro"
            }
        } else {
            return "Aconteceu um erro"
        }
    } else {
        return "Aconteceu um erro"
    }
}
