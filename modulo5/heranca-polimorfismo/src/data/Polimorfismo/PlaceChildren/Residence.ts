import { Place } from "../Place"

export class Residence extends Place {
    constructor(
        protected residentsQuantity: number,
        public cep: string
    ) {
        super(cep)
    }

    public getResidentsQuantity(): number {
        return this.residentsQuantity
    }
}