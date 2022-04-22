import { User } from './data/Heranca/User'
import { Customer } from './data/Heranca/UserChildren/Customer'
import { Client } from './data/Polimorfismo/Client'
import { Commerce } from './data/Polimorfismo/PlaceChildren/Commerce'
import { Residence } from './data/Polimorfismo/PlaceChildren/Residence'
import { Industry } from './data/Polimorfismo/PlaceChildren/Industry'
import { Employee } from './data/Heranca/UserChildren/Employee'
import { Seller } from './data/Heranca/UserChildren/Seller'
import { ClientManager } from './data/Polimorfismo/ClientManager'
import { ResidentialClient } from './data/Polimorfismo/PlaceGrandchildren/ResidentialClient'
import { CommercialClient } from './data/Polimorfismo/PlaceGrandchildren/CommercialClient'
import { IndustrialClient } from './data/Polimorfismo/PlaceGrandchildren/IndustrialClient'

// Herança:
// Exercício 1:
const user1: User = new User("abc123", "sofia@email.com", "Sofia", "123456")
console.log(user1.getId(), user1.getName(), user1.getEmail())

// Exercício 2:
const customer1: Customer = new Customer(
    "def456",
    "laura@email.com",
    "Laura",
    "456123",
    "0123.4567.8910.1112"
)

// Exercício 3:
console.log(customer1.getId(), customer1.getName(), customer1.getEmail(), customer1.purchaseTotal, customer1.getCreditCard())

// Exercício 4 e 5:
customer1.introduceYourself()

// Exercício 6:
const employee1: Employee = new Employee(
    "ghi789",
    "fernando@email.com",
    "Fernando",
    "789456",
    "19/04/2022",
    1234
)
console.log(employee1.getId, employee1.getName, employee1.getEmail, employee1.getBaseSalary, employee1.getAdmissionDate)

// Exercício 7:
console.log(employee1.calculateTotalSalary())

// Exercício 8:
const seller1: Seller = new Seller(
    "jkl321",
    "marcos@email.com",
    "Marcos",
    "357159",
    "19/03/2022",
    1342
)

console.log(seller1.getId())
console.log(seller1.getEmail())
console.log(seller1.getName())
console.log(seller1.getAdmissionDate())
console.log(seller1.getBaseSalary())

// Exercício 9:
seller1.setSalesQuantity(15)

// Exercício 10:
const seller2: Seller = new Seller(
    "mno654",
    "lina@email.com",
    "Lina",
    "024680",
    "19/02/2022",
    1423
)
seller2.setSalesQuantity(20)
console.log(seller2.calculateTotalSalary())

//---------------------------------------------------------------------------------------------------------------------------------------

// Polimorfismo:
// Exercício 1:
const client1: Client = {
    name: "Rosana",
    registrationNumber: 789,
    consumedEnergy: 500,
    calculateBill: () => {
        return 2
    }
}

console.log(client1)

// Exercício 3:
const commerce1: Commerce = new Commerce(4, "12300456")
const residence1: Residence = new Residence(5, "12300789")
const industry1: Industry = new Industry(20, "12300321")

console.log(commerce1.getCep(), residence1.getCep(), industry1.getCep())

// Exercício 8:
const clientManager = new ClientManager()

const residentialClient: ResidentialClient = new ResidentialClient(
    5,
    "13456789",
    "Marina",
    852,
    200,
    "987.654.321.01"
)
clientManager.registerClient(residentialClient)

const commercialClient = new CommercialClient(
    3,
    "12456789",
    "Manuela",
    951,
    250,
    "31.512.664/0001-63"
)
clientManager.registerClient(commercialClient)

const industrialClient = new IndustrialClient(
    30,
    "14456789",
    "Isabela",
    486,
    150,
    123
)
clientManager.registerClient(industrialClient)

console.log(clientManager.calculateTotalIncome())