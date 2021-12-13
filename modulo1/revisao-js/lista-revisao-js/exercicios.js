// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a,b) {
        return a - b
    })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novaArray = []
    for (numero of array) {
        if (numero % 2 === 0) {
            novaArray.push(numero)
        }
    }
    return novaArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novaArray = []
    for (numero of array) {
        if (numero % 2 === 0) {
            novaArray.push(numero ** 2)
        }
    }
    return novaArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNum = 0
    for (numero of array) {
        if (maiorNum < numero) {
            maiorNum = numero
        }
    }
    return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum
    if (num1 > num2) {
        maiorNum = num1
    } else {
        maiorNum = num2
    }

    let menorNum
    if (num1 < num2) {
        menorNum = num1
    } else {
        menorNum = num2
    }
    
    const comparaNumeros = {
        maiorNumero: maiorNum,
        maiorDivisivelPorMenor: maiorNum % menorNum === 0,
        diferenca: maiorNum - menorNum
    }

    return comparaNumeros
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    const arrayDePares = []
    for (let i = 0; i < n; i++) {
        arrayDePares.push(i * 2)
    }
    return arrayDePares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo = ""
    if (ladoA === ladoB && ladoA === ladoC) {
        triangulo = "Equilátero"
    } else if (ladoA === ladoB && ladoA !== ladoC || 
        ladoA !== ladoB && ladoA === ladoC || 
        ladoB === ladoC && ladoB !== ladoA) {
        triangulo = "Isósceles"
    } else {
        triangulo = "Escaleno"
    }

    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a,b) {
        return a - b
    })
    
    const novaArray = []
    novaArray.push(array[array.length - 2])
    novaArray.push(array[1])

    return novaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atoresString = filme.atores.join(', ')
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atoresString}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}