import { retornaDiaDoNascimento } from './Exercícios/ex-1'
import { imprimeTipo } from './Exercícios/ex-2'
import { GENERO, retornaInfoDoFilme } from './Exercícios/ex-3'
import { colaboradores, colaboradoresMarketingPresencial } from './Exercícios/ex-4'
import { users, adminEmails } from './Exercícios/ex-5'
import { clientes, acharClientesComSaldoNegativo } from './Exercícios/ex-6'
import { produtos, ordenaPorQuantidade } from './Exercícios/ex-7'
import { precisaRenovarCarteira } from './Exercícios/ex-8'
import { retornaQuantidadeDeAnagramas } from './Exercícios/ex-9'
import { verificaCPF } from './Exercícios/ex-10'
import { converteParaNumerosRomanos } from './Exercícios/ex-11'

console.log(retornaDiaDoNascimento("Sofia", "02/03/1995"))
imprimeTipo(true)
console.table(retornaInfoDoFilme("John Wick", 2014, GENERO.ACAO, 100))
console.table(colaboradoresMarketingPresencial(colaboradores))
console.table(adminEmails(users))
console.table(acharClientesComSaldoNegativo(clientes))
console.table(ordenaPorQuantidade(produtos))
console.log(precisaRenovarCarteira("02/03/1995", "10/10/2010"))
console.log(retornaQuantidadeDeAnagramas("gatinho"))
console.log(verificaCPF("145.382.206-89"))
console.log(converteParaNumerosRomanos(1990))