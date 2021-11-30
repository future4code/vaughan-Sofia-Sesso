// Exercícios de Interpretação de Código:
/*
1)
const bool1 = true
const bool2 = false
const bool3 = !bool2 // const bool3 = true

let resultado = bool1 && bool2 // true && false
console.log("a. ", resultado)

R: a. false

resultado = bool1 && bool2 && bool3 // true && false && true
console.log("b. ", resultado) 

R: b. false

resultado = !resultado && (bool1 || bool2) // false && (true || false)
console.log("c. ", resultado)

R: c. false

console.log("d. ", typeof resultado)

R: d. boolean

2)
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

R: Ele esqueceu de converter os retornos dos prompts de string para number.
   O que vai aparecer no console é a concatenação dos dois números digitados nos prompts.

3)
R: Colocando os prompts dentro do Number() para converter os valores de string para number. Ficaria assim:
let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))
*/

//Exercícios de Escrita de Código:
//1)

const idade = Number(prompt("Qual é sua idade?"));
const idadeAmigo = Number(prompt("Qual é a idade do(a) seu(ua) melhor amigo(a)?"));

const comparaçaoIdades = idade > idadeAmigo;
console.log("Sua idade é maior do que a do(a) seu(ua) melhor amigo(a)?", comparaçaoIdades);

const diferençaIdades = idade - idadeAmigo;
console.log("Diferença entre sua idade e de(a) seu(ua) amigo(a):", diferençaIdades);

//2)

const numeroPar = Number(prompt("Insira um número par"));

const resto = numeroPar % 2;
console.log("Resto da divisão por 2:", resto);

//Sempre que dividimos um número par por 2 o resto será igual a 0.
//Quando dividimos um número ímpar por 2 o resto será igual a 1.

//3)

const idadeAnos = Number(prompt("Qual é sua idade?"));

const idadeMeses = idadeAnos * 12;
const idadeDias = idadeAnos * 365;
const idadeHoras = idadeDias * 24;

console.log("A idade do usuário em meses:", idadeMeses);
console.log("A idade do usuário em dias:", idadeDias);
console.log("A idade do usuário em horass:", idadeHoras);

//4)

const primeiroNumero = Number(prompt("Digite um número"));
const segundoNumero = Number(prompt("Digite outro número"));

const primeiraOperaçao = primeiroNumero > segundoNumero;
const segundaOperaçao = primeiroNumero === segundoNumero;
const terceiraOperaçao = (primeiroNumero % segundoNumero) === 0;
const quartaOperaçao = (segundoNumero % primeiroNumero) === 0;

console.log("O primeiro numero é maior que segundo?", primeiraOperaçao);
console.log("O primeiro numero é igual ao segundo?", segundaOperaçao);
console.log("O primeiro numero é divisível pelo segundo?", terceiraOperaçao);
console.log("O segundo numero é divisível pelo primeiro?", quartaOperaçao);

//Desafio:

//1)
//a)
let fahrenheit = 77;

let fahrenheitParaKelvin = (fahrenheit - 32) * (5/9) + 273.15;
console.log("a) "+ fahrenheitParaKelvin + "K");

//b)
let celsius = 80;

let celsiusParaFahrenheit = celsius * (9/5) + 32;
console.log("b) " + celsiusParaFahrenheit + "°F");

//c)
celsius = 30;

celsiusParaFahrenheit = celsius * (9/5) + 32;

fahrenheit = celsiusParaFahrenheit;

fahrenheitParaKelvin = (fahrenheit - 32) * (5/9) + 273.15;

console.log("c) " + celsiusParaFahrenheit + "°F" + " e " + fahrenheitParaKelvin + "K");

//d)
celsius = Number(prompt("Digite temperatura em graus Celsius"));

celsiusParaFahrenheit = celsius * (9/5) + 32;

fahrenheit = celsiusParaFahrenheit;

fahrenheitParaKelvin = (fahrenheit - 32) * (5/9) + 273.15;

console.log("d) " + celsiusParaFahrenheit + "°F" + " e " + fahrenheitParaKelvin + "K");

//2)

const kWPorHora = 280;

let custoPorHora = kWPorHora * 0.05;
console.log("Preço do quilowatt por hora: " + custoPorHora + " reais.");

const desconto = 15/100

custoPorHora = custoPorHora - custoPorHora * desconto;
console.log("Preço do quilowatt por hora: " + custoPorHora + " reais.");

//3)
//a)
let libra = 20;

let libraParaKg = libra / 2.2046;
console.log("a) 20lb equivalem a " + libraParaKg + "kg.");

//b)
let onça = 10.5;

let onçaParaKg = onça / 35.274;
console.log("b) 10.5oz equivalem a " + onçaParaKg + "kg.");

//c)
let milha = 100;

let milhaParaMetro = milha * 1609.34;
console.log("c) 100mi equivalem a " + milhaParaMetro + "m.");

//d)
let pe = 50;

let peParaMetro = pe / 3.2808;
console.log("d) 50ft equivalem a " + peParaMetro + "m.");

//e)
let galao = 103.56;

let galaoParaLitro = galao * 3.7854;
console.log("e) 103.56gal equivalem a " + galaoParaLitro + "l.");

//f)
let xicara = 450;

let xicaraParaLitro = xicara / 6;
console.log("f) 450 xic equivalem a " + xicaraParaLitro + "l.");

//g)
libra = Number(prompt("Digite quantidade de libras para converter"));

libraParaKg = libra / 2.2046;
console.log(libra + "lb equivalem a " + libraParaKg + "kg.");

milha = Number(prompt("Digite quantidade de milhas para converter"));

milhaParaMetro = milha * 1609.34;
console.log(milha + "mi equivalem a " + milhaParaMetro + "m.");

galao = Number(prompt("Digite quantidade de galões para converter"));

galaoParaLitro = galao * 3.7854;
console.log(galao + "gal equivalem a " + galaoParaLitro + "l.");