import { Place } from "../Place"

export class Industry extends Place {
    constructor(
        protected machinesQuantity: number,
        public cep: string
    ) {
        super(cep)
    }

    getMachinesQuantity(): number {
        return this.machinesQuantity
    }
}