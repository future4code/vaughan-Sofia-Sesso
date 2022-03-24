type Roupa = {
    nome: string,
    preco: number,
    classificacao: string
}

export const roupas: Roupa[] = [
    {
        nome: "Camiseta",
        preco: 30,
        classificacao: "Verão"
    },
    {
        nome: "Luvas",
        preco: 15,
        classificacao: "Inverno"
    },
    {
        nome: "Biquini",
        preco: 25,
        classificacao: "Banho"
    },
    {
        nome: "Sutiã",
        preco: 18,
        classificacao: "Íntimas"
    }
]

export const roupasComDesconto = (array: Roupa[]): Roupa[] => {
    return array.map((roupa) => {
        if (roupa.classificacao === "Verão") {
            return {
                ...roupa,
                precoComDesconto: roupa.preco * 0.95
            }
        } else if (roupa.classificacao === "Inverno") {
            return {
                ...roupa,
                precoComDesconto: roupa.preco * 0.9
            }
        } else if (roupa.classificacao === "Banho") {
            return {
                ...roupa,
                precoComDesconto: roupa.preco * 0.96
            }
        } else if (roupa.classificacao === "Íntimas") {
            return {
                ...roupa,
                precoComDesconto: roupa.preco * 0.93
            }
        }

    })
}