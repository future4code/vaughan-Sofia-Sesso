// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = prompt("Digite a altura do retângulo")
  largura = prompt("Digite a largura do retângula")
  const area = altura * largura

  return console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // implemente sua lógica aqui
  anoAtual = prompt("Digite o ano atual")
  anoNascimento = prompt("Digite seu ano de nascimento")
  const idade = anoAtual - anoNascimento

  return console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso / (altura * altura)

  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Digite seu nome")
  idade = prompt("Digite sua idade")
  email = prompt("Digite seu e-mail")
  const mensagem = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`

  return console.log(mensagem)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(primeiraCor, segundaCor, terceiraCor) {
  // implemente sua lógica aqui
  primeiraCor = prompt("Qual é a sua cor favorita?")
  segundaCor =  prompt("Qual é a sua segunda cor favorita?")
  terceiraCor =  prompt("Qual é a sua terceira cor favorita?")
  const coresFavoritas = [primeiraCor, segundaCor, terceiraCor]

  return console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const numeroDeIngressos = custo / valorIngresso

  return numeroDeIngressos
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const tamanho1 = string1.length
  const tamanho2 = string2.length
  
  return tamanho1 === tamanho2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimaPosicao = array.length - 1

  return array[ultimaPosicao]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroElemento = array[0]
  let ultimoElemento = array[array.length - 1]
  
  array[0] = ultimoElemento
  array[array.length - 1] = primeiroElemento

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const novaString1 = string1.toLowerCase()
  const novaString2 = string2.toLowerCase()
  
  return novaString1 === novaString2
}

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anoNascimento, anoEmissao) {
  // implemente sua lógica aqui
  anoAtual = prompt("Digite o ano atual")
  anoNascimento = prompt("Digite seu ano de nascimento")
  anoEmissao = prompt("Digite o ano de emissão da sua carteira de identidade")

  const idade = anoAtual - anoNascimento
  const idadeDaCarteira = anoAtual - anoEmissao

  const renovaçaoParaMenoresde20 = idade <= 20 && idadeDaCarteira >= 5
  const renovaçaoParaEntre20E50 = idade > 20 && idade <= 50 && idadeDaCarteira >= 10
  const renovaçaoParaMaioresde50 = idade > 50 && idadeDaCarteira >= 15

  return console.log(renovaçaoParaMenoresde20 || renovaçaoParaEntre20E50 || renovaçaoParaMaioresde50)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const multiploDe400 = ano % 400 === 0
  const multiploDe4 = ano % 4 === 0
  const multiploDe100 = ano % 100 === 0

  return multiploDe400 || (multiploDe4 && (multiploDe100 && multiploDe400))
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maiorDe18, temEnsinoMedio, temDisponibilidade) {
  // implemente sua lógica aqui
  maiorDe18 = promp("Você tem mais de 18 anos?")
  temEnsinoMedio = prompt("Você possui ensino médio completo?")
  temDisponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  if (maiorDe18 === "sim"){
   maiorDe18 === true
  }
  if (temEnsinoMedio === "sim"){
   temEnsinoMedio === true
  }
  if (temDisponibilidade === "sim"){
   temDisponibilidade === true
  }

  return console.log(maiorDe18 && temEnsinoMedio && temDisponibilidade)
}