//Exercícios de Interpretação de Código:
/*
//1)
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

R: Matheus Nachtergaele
   Virginia Cavendish
   {canal: 'Globo', horario: '14h'}

//2)
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

R: a) {nome: 'Juca', idade: 3, raca: 'SRD'}
      {nome: 'Juba', idade: 3, raca: 'SRD'}
      {nome: 'Jubo', idade: 3, raca: 'SRD'}
   b) Ela faz a copia de um objeto.

//3)
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

R: a) false
      undefined
   b) O valor false será impresso para a propriedade "backender", porque esse foi o valor definido no objeto
      e para a propriedade "altura" será impresso undefined, porque esta propriedade não foi definida.
*/

//Exercícios de Escrita de Código:

//1)
//a)
const pessoa = {
    nome: "Sofia",
    apelidos: ["So", "Sofi", "Soso"]
}

function imprimeMensagem (objeto, nome, apelidos) {
    nome = objeto.nome
    apelidos = objeto.apelidos
    
    return console.log(`Eu sou a ${nome},
mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`)
}

imprimeMensagem(pessoa)

//b)
const novosApelidos = {
    ... pessoa,
    apelidos: ["Fi", "Fifi", "Sofis"] //dificil demais de achar apelidos pro meu nome
}

imprimeMensagem(novosApelidos)

//2)
//a)
const meuPai = {
    nome: "Fernando",
    idade: 57,
    profissao: "Engenheiro"
}

const minhaMae = {
    nome: "Rosana",
    idade: 56,
    profissao: "Professora"
}

//b)
function informaçaoSobreMeusPais (objeto, nome, idade, profissao) {
    nome = objeto.nome
    idade = objeto.idade
    profissao = objeto.profissao

    const array = [nome, nome.length, idade, profissao, profissao.length]

    return array
}

//3)
//a)
const carrinho = []

//b)
const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta2 = {
    nome: "Framboesa",
    disponibilidade: true
}

const fruta3 = {
    nome: "Amora",
    disponibilidade: true
}

//c)
function adicionarNoCarrinho (objeto) {
    return  carrinho.push(objeto)
}

adicionarNoCarrinho(fruta1)
adicionarNoCarrinho(fruta2)
adicionarNoCarrinho(fruta3)

//d)
console.log(carrinho)

//Desafios:

//1)
function criarObjetoComInfo (nomeFunçao, idadeFunçao, profissaoFunçao) {
    nomeFunçao = prompt("Qual é o seu nome?")
    idadeFunçao = prompt("Qual é a sua idade?")
    profissaoFunçao = prompt("Qual é a sua profissão?")

    const objetoComInfo = {
        nome: nomeFunçao,
        idade: idadeFunçao,
        profissao: profissaoFunçao
    }
    
    return console.log(objetoComInfo), console.log(typeof objetoComInfo)
}

criarObjetoComInfo()

//2)
function compararAnosDeLançamento (filme1, filme2) {
    filme1 = {
        nome: "Star Wars: Uma Nova Esperança",
        anoDeLançamento: 1977    
    }
    filme2 = {
        nome: "Star Wars: O Império Contra-Ataca",
        anoDeLançamento: 1980
    }

    const afirmaçao1 = filme1.anoDeLançamento < filme2.anoDeLançamento
    const afirmaçao2 = filme1.anoDeLançamento === filme2.anoDeLançamento

    return console.log(`O primeiro filme foi lançado antes do segundo? ${afirmaçao1}
O primeiro filme foi lançado no mesmo ano do segundo? ${afirmaçao2}`)
}

compararAnosDeLançamento()

//3)
function controleDeEstoque (objeto) {
    const frutaIndisponivel = {
        ... objeto,
        disponibilidade: !(objeto.disponibilidade)
    }
    
    return frutaIndisponivel
}

console.log(controleDeEstoque(fruta1))
console.log(controleDeEstoque(fruta2))
console.log(controleDeEstoque(fruta3))