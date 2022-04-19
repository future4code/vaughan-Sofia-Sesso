import { Place } from "../Place"

export class Commerce extends Place {
    constructor(
        protected floorsQuantity: number,
        public cep: string
    ) {
        super(cep)
    }

    public getFloorsQuantity(): number {
        return this.floorsQuantity
    }
}