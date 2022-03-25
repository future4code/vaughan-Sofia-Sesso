import { amostra1, estatisticasDaAmostra1 } from './Exercícios/exercicio-2'
import { posts, buscarPostsPorAutor } from './Exercícios/exercicio-3'
import { consultas, pacientesEmOrdemAlfabetica } from './Exercícios/desafio-5'
import { determinaIdadeHistorica, Sigla } from './Exercícios/desafio-6'
import { roupas, roupasComDesconto } from './Exercícios/desafio-7'

console.log(amostra1.numeros, estatisticasDaAmostra1)
console.log(buscarPostsPorAutor(posts, "Severo Snape"))
console.log(pacientesEmOrdemAlfabetica(consultas))
console.log(determinaIdadeHistorica(2000, Sigla.AC))
console.table(roupasComDesconto(roupas))