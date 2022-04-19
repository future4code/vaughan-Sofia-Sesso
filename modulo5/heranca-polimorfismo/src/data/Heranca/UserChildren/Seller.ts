import { Employee } from './Employee'

export class Seller extends Employee {
    private salesQuantity: number = 0
    private static SELLING_COMMISSION: number = 5

    public setSalesQuantity(salesQuantity: number): void {
        this.salesQuantity = salesQuantity
    }

    public calculateTotalSalary(): number {
        return this.baseSalary + Seller.BENEFITS_VALUE + Seller.SELLING_COMMISSION * this.salesQuantity
    }
}