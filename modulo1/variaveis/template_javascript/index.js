// Exercícios de Interpretação:
/*
let a = 10;
let b = 10;

console.log(b);

R: Aparecerá 10 no console

b = 5;
console.log(a, b);

R: Aparecerá 10 5 no console

let a = 10;
let b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c);

R: Aparecerá 20 10 10 no console

let p = prompt("Quantas horas você trabalha por dia?");
let t = prompt("Quanto você recebe por dia?");
alert(`Voce recebe ${t/p} por hora`);

R: p:horasTrabalhadasPorDia e t:salarioDiario
*/

//Exercícios de Escrita de Código:

//1.
let nome;
let idade;

console.log(typeof nome, typeof idade);
//Foi impresso undefined porque não dei um valor para as variaveis

nome = prompt("Qual é o seu nome?");
idade = prompt("Qual é a sua idade?");

console.log(typeof nome, typeof idade);
//Foi impresso string porque o valor recebido depois de um prompt sempre é do tipo string

console.log("Olá", nome, "você tem", idade, "anos.");

//2.
let gostaDePizza = prompt("Você gosta de pizza?");
let temCachorro = prompt("Você tem cachorro de estimação?");
let comprouPresente = prompt("Você já comprou seus presentes de natal?");

console.log("Você gosta de pizza?", gostaDePizza);
console.log("Você tem cachorro de estimação?", temCachorro);
console.log("Você já comprou seus presentes de natal?", comprouPresente);

//3.
let a = 10;
let b = 25;
let c

c = a;
a = b;
b = c;

console.log(a, b);

//Desafio:
let idadePai = prompt("Qual é a idade do seu pai?");
let idadeMae = prompt("Qual é a idade da sua mãe?");

let idadePaiNumero = Number(idadePai);
let idadeMaeNumero = Number(idadeMae);

let somaIdades = idadePaiNumero + idadeMaeNumero;
let multiplicaIdades = idadePaiNumero * idadeMaeNumero;

console.log("O primeiro número somado ao segundo número resulta em:", somaIdades);
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicaIdades);