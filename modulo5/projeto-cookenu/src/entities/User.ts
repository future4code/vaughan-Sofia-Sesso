import { Recipe } from "./Recipe"

export class User {
    public recipes: Recipe[] = []
    public following: string[] = []

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getName(): string {
        return this.name
    }

    public getEmail(): string {
        return this.email
    }

    public getPassword(): string {
        return this.password
    }
}