const operation = process.argv[2]
const firstValue = Number(process.argv[3])
const secondValue = Number(process.argv[4])
let total

if (operation && firstValue && secondValue) {
    switch (operation) {
        case 'add':
            total = firstValue + secondValue
            break
        case 'sub':
            total = firstValue - secondValue
            break
        case 'mult':
            total = firstValue * secondValue
            break
        case 'div':
            total = firstValue / secondValue
            break
    }

    console.log("\x1b[32m", `Resposta: ${total}`)
} else if (operation && firstValue && !secondValue) {
    console.log("\x1b[31m", "Esperava 3 parâmetros só recebi 2")
} else if (operation && !firstValue && !secondValue) {
    console.log("\x1b[31m", "Esperava 3 parâmetros só recebi 1")
} else {
    console.log("\x1b[31m", "Não recebi nenhum parâmetro")
}



