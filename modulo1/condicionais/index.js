//Exercícios de Interpretação de Código:
/*
1)
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

R: a) Esse código testa se o número digitado é par ou ímpar, ou seja se ele é divisível por 2 ou não.
   b) Ele imprimirá "Passou no teste" para números pares.
   c) Ele imprimirá "Não passou no teste" para números ímpares.

2)
let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break;  // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

R: a) O código acima serve para imprimir os preços das frutas digitadas no prompt.
   b) A mensagem imprimida será: "O preço da fruta Maça é R$ 2.25".
   c) A mensagem imprimida será: "O preço da fruta Pêra é R$ 5", pois a varíável preço será redefinida.

3)
const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

R: a) A primeira linha está pedindo para o usuário digitar um número e convertendo esse 
número de string para number.
   b) Se o número digitado for 10 a mensagem será "Esse número passou no teste".
Se o número for -10 nada será impresso, pois nenhuma condição else foi definida.
   c) O erro vai dizer que a variável mensagem não foi declarada, pois ela foi apenas 
declarada dentro do escopo da condicional então ela não pode ser usada no resto do código.
*/

//Exercícios de Escrita de Código:
//1)

const idadeDoUsuario = Number(prompt("Qual é a sua idade?"))

if (idadeDoUsuario >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

//2)

const turnoDoUsuario = prompt("Digite seu turno (M (matutino), V (Vespertino) ou N (Noturno))").toUpperCase()

if (turnoDoUsuario === "M") {
    console.log("Bom dia!")
} else if (turnoDoUsuario === "V") {
    console.log("Boa tarde!")
} else if (turnoDoUsuario === "N") {
    console.log("Boa noite!")
}

//3)

switch (turnoDoUsuario) {
    case "M":
        console.log("Bom dia!")
        break
    case "V":
        console.log("Boa tarde!")
        break
    case "N":
        console.log("Boa noite!")
        break
}

//4)

const preço = Number(prompt("Qual é o preço do ingresso?"))
const genero = prompt("Qual é o gênero do filme?").toLowerCase()

if (preço < 15 && genero === "fantasia") {
    console.log("Bom filme!")
} else {
    console.log("Escolha outro filme :(")
}

//Desafios:
//1)

if (preço < 15 && genero === "fantasia") {
    const lanchinho = prompt("Qual o snack que você quer comprar?")
    console.log("Bom filme!", `Aproveite seu(ua) ${lanchinho}!`)
} else {
    console.log("Escolha outro filme :(")
}

//2)

const nomeCompleto = prompt("Digite seu nome completo")
const tipo = prompt("Digite o tipo de jogo (IN ou DO)").toUpperCase()
let etapa = prompt("Digite a etapa do jogo (SF, DT ou FI)").toUpperCase()
const categoria = prompt("Selecione uma categoria (1, 2, 3 ou 4)")
const numeroDeIngressos = Number(prompt("Quantos ingressos?"))
let preçoDoIngresso

if (etapa === "SF") {
    etapa = "Semi-final"
    switch (categoria) {
        case "1":
            preçoDoIngresso = 1320
            break
        case "2":
            preçoDoIngresso = 880
            break
        case "3":
            preçoDoIngresso = 550
            break
        case "4":
            preçoDoIngresso = 220
            break
    }
} else if (etapa === "DT") {
    etapa = "Decisão de terceiro lugar"
    switch (categoria) {
        case "1":
            preçoDoIngresso = 660
            break
        case "2":
            preçoDoIngresso = 440
            break
        case "3":
            preçoDoIngresso = 330
            break
        case "4":
            preçoDoIngresso = 170
            break
    }
} else if (etapa === "FI") {
    etapa = "Final"
    switch (categoria) {
        case "1":
            preçoDoIngresso = 1980
            break
        case "2":
            preçoDoIngresso = 1320
            break
        case "3":
            preçoDoIngresso = 880
            break
        case "4":
            preçoDoIngresso = 330
            break
    }
}

const total = preçoDoIngresso * numeroDeIngressos

if (tipo === "IN") {
    console.log(`---Dados da compra--- 
Nome do cliente: ${nomeCompleto} 
Tipo do jogo:  Internacional 
Etapa do jogo:  ${etapa} 
Categoria:  ${categoria}
Quantidade de Ingressos: ${numeroDeIngressos} 
---Valores--- 
Valor do ingresso:  U$ ${preçoDoIngresso / 4.10}
Valor total:  U$ ${total / 4.10}`)
} else {
    console.log(`---Dados da compra--- 
Nome do cliente: ${nomeCompleto} 
Tipo do jogo:  Nacional 
Etapa do jogo:  ${etapa} 
Categoria:  ${categoria}
Quantidade de Ingressos: ${numeroDeIngressos} 
---Valores--- 
Valor do ingresso:  R$ ${preçoDoIngresso}
Valor total:  R$ ${total}`)
}