import { Client } from "../Client"
import { Commerce } from "../PlaceChildren/Commerce"

export class CommercialClient extends Commerce implements Client {
    public name: string
    public registrationNumber: number
    public consumedEnergy: number
    private cnpj: string

    constructor(
        floorsQuantity: number,
        cep: string,
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        cnpj: string
    ) {
        super(floorsQuantity, cep)
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
        this.cnpj = cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }

    public getCNPJ(): string {
        return this.cnpj
    }

}