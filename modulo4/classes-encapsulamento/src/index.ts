import { Transaction } from "./data/Transaction"
import { UserAccount } from "./data/UserAccount"
import { Bank } from "./data/Bank"

// Exercício 1:
// a) O construtor serve para atribuir os valores passados às propriedades da classe ao criar uma instância usando essa classe.

// b) A mensagem apareceu uma vez, pois o construtor só é chamado uma vez por instância.
const user1: UserAccount = new UserAccount("123.456.789.10", "Sofia", 27)
const user2: UserAccount = new UserAccount("321.654.987.01", "Laura", 28)
const user3: UserAccount = new UserAccount("159.357.258.46", "Rosana", 57)

// c) Criando funções públicas que retornam as propriedades que queremos acessar.

// Exercício 2:
const transaction1: Transaction = new Transaction("Depósito de dinheiro", 100, "18/04/2022")
const transaction2: Transaction = new Transaction("Depósito de dinheiro", 1050, "18/04/2022")

// Exercício 3:
const newBank: Bank = new Bank([user1, user2])

newBank.addAccount(user3)
newBank.removeAccount("321.654.987.01")
newBank.getAllAccounts()

user1.addTransaction(transaction1)
user1.addTransaction(transaction2)
user1.getTransactions()
user1.getBalance()