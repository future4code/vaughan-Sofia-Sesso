import { Client } from "../Client"
import { Industry } from "../PlaceChildren/Industry"

export class IndustrialClient extends Industry implements Client {
    public name: string
    public registrationNumber: number
    public consumedEnergy: number
    private industryRegistrationNumber: number

    constructor(
        machinesQuantity: number,
        cep: string,
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        industryRegistrationNumber: number
    ) {
        super(machinesQuantity, cep)
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
        this.industryRegistrationNumber = industryRegistrationNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
    }

    public getIndustryRegistrationNumber(): number {
        return this.industryRegistrationNumber
    }

}