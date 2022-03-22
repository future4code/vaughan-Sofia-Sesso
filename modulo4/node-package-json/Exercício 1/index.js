// a) Temos que criar um variável, e atribuir process.argv[n] para ela, n sendo maior ou igual a 2.

// b) e c)

const name = process.argv[2]
const age = process.argv[3]
const newAge = Number(age) + 7

if (name && age) {
    console.log("\x1b[32m", `Olá, ${name}! Você tem ${age} anos.`)
    console.log("\x1b[32m", `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${newAge}.`)
} else if (name && !age) {
    console.log("\x1b[31m", "Esperava 2 parâmetros só recebi 1.")
} else {
    console.log("\x1b[31m", "Não recebi nenhum parâmetro")
}