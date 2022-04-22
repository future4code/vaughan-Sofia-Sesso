import { Client } from "../Client";
import { Residence } from "../PlaceChildren/Residence"

export class ResidentialClient extends Residence implements Client {
    public name: string
    public registrationNumber: number
    public consumedEnergy: number
    private cpf: string

    constructor(
        residentsQuantity: number,
        cep: string,
        name: string,
        registrationNumber: number,
        consumedEnergy: number,
        cpf: string
    ) {
        super(residentsQuantity, cep)
        this.name = name
        this.registrationNumber = registrationNumber
        this.consumedEnergy = consumedEnergy
        this.cpf = cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }

    public getCPF(): string {
        return this.cpf
    }
}