//Exercícios de Interpretação de Código:
/*
//1)
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
]
  
const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
})

R: Serão impressos os elementos de uma nova array, os quais serão formados pelos 
objetos da array original, o índice dos objetos e a array original.

//2)
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
const novoArrayB = usuarios.map((item, index, array) => {
     return item.nome
})
  
console.log(novoArrayB)

R: Será impressa uma nova array contendo apenas os nomes dos objetos da array original.

//3)
const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" },
]
  
const novoArrayC = usuarios.filter((item, index, array) => {
     return item.apelido !== "Chijo"
})
  
console.log(novoArrayC)

R: Será impressa uma nova array contendo apenas os elementos que tem apelidos que são diferentes de "Chijo".
*/

//Exercícios de Escrita de Código:
//1)
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

//a)
const nomesDosCachorros = pets.map((cachorro) => {
    return cachorro.nome
})

//b)
const apenasSalsichas = pets.filter((cachorro) => {
    return cachorro.raca === "Salsicha"
})

//c)
const apenasPoodles = pets.filter((cachorro) =>{
    return cachorro.raca === "Poodle"
})

const cuponsParaPoodles = apenasPoodles.map((cachorro) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro}!`
})

//2)
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//a)
const nomesDosProdutos = produtos.map((produto) => {
    return produto.nome
})

//b)
const produtosComDesconto = produtos.map((produto) => {
    const novosPrecos = produto.preco - (5/100 * produto.preco)
    const elementoModificado = {
        nome: produto.nome,
        preco: novosPrecos
    }
    return elementoModificado
})

//c)
const apenasBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})

//d)
const produtosDaMarcaYpe = produtos.filter((produto) => {
    return produto.nome.includes("Ypê")
})

//e)
const mensagemParaProdutosYpe = produtosDaMarcaYpe.map((produto) => {
    return `Compre ${produto.nome} por R$ ${produto.preco}`
})