//Exercícios de Interpretação de Código:
/*
1)
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

R: a) Vai ser impresso 10 e 50 no console.
b) A função vai calcular o resultado dessa operação, mas não irá imprimar nada no console.

2)
let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

R:a) Essa função irá converter todas as letras do texto digitado pelo usuário para letras maiúsculas
e irá ver se a palavra "cenoura" está contida no texto.
b) i. eu gosto de cenoura true
ii. cenoura é bom pra vista true
iii. cenouras crescem na terra true
*/

//Exercícios de Escrita de Código:
//1)
//a)
function imprimirMensagem() {
    console.log(`Eu sou Sofia, tenho 26 anos, moro em São Paulo e sou estudante`)
}

imprimirMensagem()

//b)
function mensagemComParametros(nome, idade, cidade, profissao) {
    nome = prompt("Qual é seu nome?")
    idade = Number(prompt("Qual é sua idade?"))
    cidade = prompt("Onde você mora?")
    profissao = prompt("Qual é sua profissão?")

    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
}

console.log(mensagemComParametros())

//2)
//a)
function soma(numero1, numero2) {
    numero1 = Number(prompt("Digite um número"))
    numero2 = Number(prompt("Digite outro número"))

    return numero1 + numero2
}

console.log("Soma de seus números: " + soma())

//b)
function comparaçao(numero1, numero2) {
    numero1 = Number(prompt("Digite um número"))
    numero2 = Number(prompt("Digite outro número"))

    return numero1 >= numero2
}

console.log("O primeiro número é maior que o segundo: " + comparaçao())

//c)
function parOuImpar(numeroDigitado) {
    numeroDigitado = Number(prompt("Digite um número"))
    const resto = numeroDigitado % 2

    return resto === 0
}

console.log("O número digitado é par: " + parOuImpar())

//d)
function medirSuaMensagem(mensagemDigitada) {
    mensagemDigitada = prompt("Digite uma mensagem")
    const mensagemModificada = mensagemDigitada.toUpperCase()

    return `Tamanho da mensagem: ${mensagemModificada.length}, versão nova: ${mensagemModificada}`
}

console.log(medirSuaMensagem())

//3)
function operaçoesBasicas(numero1, numero2){
    numero1 = Number(prompt("Digite um número"))
    numero2 = Number(prompt("Digite outro número"))
    const soma = numero1 + numero2
    const diferença = numero1 - numero2
    const mulplicaçao = numero1 * numero2
    const divisao = numero1 / numero2

    return `Números inseridos: ${numero1} e ${numero2} \nSoma: ${soma} \nDiferença: ${diferença} \nMultiplicação: ${mulplicaçao} \nDivisão: ${divisao}`
}

console.log(operaçoesBasicas())

//Desafio:
//1)
//a)
const imprimirParametro = parametro => console.log(parametro)

//b)
const semRetorno = (numero1, numero2) => {
    const soma = numero1 + numero2
    return imprimirParametro(soma)

}

semRetorno(5,6)

//2)
function teoremaDePitagoras(cateto1, cateto2) {
    const hipotenusa = Math.sqrt(cateto1**2 + cateto2**2)

    return hipotenusa
}

console.log(teoremaDePitagoras(3,4))