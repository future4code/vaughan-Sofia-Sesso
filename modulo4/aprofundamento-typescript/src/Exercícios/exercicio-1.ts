// a) Aparece um erro dizendo que o tipo number não pode ser atribuído à uma variável do tipo string.

// b) Temos que usar o | entre os tipos para que a variável aceite mais tipos.

// c) e d)

enum Cores {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Cores
}

const pessoa1: Pessoa = {
    nome: "Sofia",
    idade: 27,
    corFavorita: Cores.VIOLETA
}

const pessoa2: Pessoa = {
    nome: "Laura",
    idade: 27,
    corFavorita: Cores.VERMELHO
}

const pessoa3: Pessoa = {
    nome: "Rosana",
    idade: 57,
    corFavorita: Cores.AZUL
}

const pessoa4: Pessoa = {
    nome: "Fernando",
    idade: 58,
    corFavorita: Cores.VERDE
}