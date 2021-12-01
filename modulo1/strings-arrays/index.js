//Exercícios de Interpretação de Código:
/*
1)
let array
console.log('a. ', array)

R: a. undefined // não foi definido um valor para a array

array = null
console.log('b. ', array)

R: b. null // o valor definido para a array é null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)

R: c. 11 // a array possui 11 elementos

let i = 0
console.log('d. ', array[i])

R: d. 3 // o elemento na posição 0 é o número 3

array[i+1] = 19
console.log('e. ', array)

R: e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
// usando array[i+1], estamos indicando o elemento de índice 0+1 e eu acho que colocando = 19 estamos mudando esse número para 19

const valor = array[i+6]
console.log('f. ', valor)

R: f. 9 // a variável valor vai mostrar o elemento no índice 0+6 que é o número 9

2)
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

R: SUBI NUM ÔNIBUS EM MIRROCOS 27
// todas as letras ficarão maiúsculas, os As serão substituídos por Is e o número de caracteres será imprimido
*/

//Exercícios de Escrita de Código:
//1)

const nome = prompt("Qual é seu nome?");
const email = prompt("Qual é seu e-mail?");

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`);

//2)

const comidasPreferidas = ["Churrasco", "Feijoada", "Estrogonofe", "Sushi", "Cuscuz"];

//a)
console.log(comidasPreferidas);

//b)
console.log("Essas são as minhas comidas preferidas:");
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

//c)
const usuarioComida = prompt("Qual é a sua comida preferida?");

comidasPreferidas[1] = usuarioComida;
console.log("Comida do Usuário Adicionada: ", comidasPreferidas);

//3)
//a)
const listaDeTarefas = [];

//b)
const primeiraTarefa = prompt("Digite sua primeira tarefa");
const segundaTarefa = prompt("Digite sua segunda tarefa");
const terceiraTarefa = prompt("Digite sua terceira tarefa");

listaDeTarefas.push(primeiraTarefa);
listaDeTarefas.push(segundaTarefa);
listaDeTarefas.push(terceiraTarefa);

//c)
console.log("Lista de Tarefas: ", listaDeTarefas);

//d)
const tarefaEscolhida = Number(prompt("Digite o índice da tarefa realizada (1, 2 ou 3)")) - 1;

//e)
listaDeTarefas.splice(tarefaEscolhida, 1);

//f)
console.log("Lista de Tarefas Atualizada: ", listaDeTarefas);

//Desafio:
//1)

const frase = prompt("Digite uma frase");

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

//2)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

const indexDeAbacaxi = frutas.indexOf("Abacaxi");
console.log("Índice de Abacaxi: ", indexDeAbacaxi, " Tamanho do array: ", frutas.length);