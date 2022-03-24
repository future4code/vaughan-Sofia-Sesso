type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// b) Eu criaria um arquivo tsconfig.json para configurar onde está meu arquivo .ts (rootDir) e onde será criado meu arquivo .js (outDir), depois
// eu escreveria no script do package.json "start": "tsc && node endereço-do-arquivo.js", e rodaria o comando npm run start no meu terminal.
// Se o arquivo .ts estivesse dentro de uma pasta src, a única diferença seria na configuração da propriedade rootDir do tsconfig.json.

// c) Quando colocamos o endereço dos arquivos .ts no rootDir, todos os arquivos .ts que estiverem no mesmo endereço serão transpilados.
// Escrevendo apenas "tsc" no script já transpila todos os arquivos.