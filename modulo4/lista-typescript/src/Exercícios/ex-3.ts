export enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type InfoSemPontuacao = {
    nome: string,
    anoDeLancamento: number,
    genero: GENERO
}

type Pontuacao = {
    pontuacao: number
}

type InfoComPontuacao = InfoSemPontuacao & Pontuacao

export const retornaInfoDoFilme = (nome: string, anoDeLancamento: number, genero: GENERO, pontuacao?: number): InfoSemPontuacao | InfoComPontuacao => {
    if (pontuacao) {
        const infoDoFilme: InfoComPontuacao = {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero,
            pontuacao: pontuacao
        }
        return infoDoFilme
    } else {
        const infoDoFilme: InfoSemPontuacao = {
            nome: nome,
            anoDeLancamento: anoDeLancamento,
            genero: genero,
        }
        return infoDoFilme
    }
}