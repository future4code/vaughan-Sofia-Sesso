import { Client } from "./Client"

export class ClientManager {
    private clients: Client[] = []

    public getClientsQuantity(): number {
        return this.clients.length
    }

    public registerClient(client: Client): void {
        this.clients.push(client)
    }

    public calculateBillOfClient(registrationNumber: number): number {
        const foundClient = this.clients.find((client: Client) => {
            return client.registrationNumber === registrationNumber
        })

        if (foundClient) {
            return foundClient.calculateBill()
        }

        return 0
    }

    public calculateTotalIncome(): number {
        const total = this.clients.map((client: Client) => {
            return client.calculateBill()
        }).reduce((total, nextValue) =>
            total + nextValue, 0)

        return total
    }

    public deleteUser(registrationNumber: number): void {
        for (let i: number = 0; i < this.clients.length; i++) {
            if (this.clients[i].registrationNumber === registrationNumber) {
                this.clients.splice(i, 1)
            }
        }
    }
}