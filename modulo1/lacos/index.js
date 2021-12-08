//Exercícios de Interpretação de Código:
/*
//1)
let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)

R: O código está adicionando 1 ao valor, até o valor chegar a 5. Será impresso 5 no console.

//2)
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}

R: a) Será impresso apenas os números maiores que 18.
   b) Para acessar o índice de cada elemento podemos usar a maneira escrita abaixo.
   for (let numero of lista) {
    console.log(lista.indexOf(numero))
}

//3)
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

R: Será impresso:
   "*"
   "**"
   "***"
   "****"
*/

//Exercícios de Escrita de Código:
//1)
let quantosPets = Number(prompt("Quantos bichinhos de estimação você tem?"))
    
	if (quantosPets === 0) {
	    console.log("Que pena! Você pode adotar um pet!")
	} else {
	    let arrayDePets = []
       
	    while (quantosPets > arrayDePets.length) {
	        let nome = prompt("Digite o nome do seu bichinho")
	        arrayDePets.push(nome)
	    }
	    console.log(arrayDePets)
    }

//2)
