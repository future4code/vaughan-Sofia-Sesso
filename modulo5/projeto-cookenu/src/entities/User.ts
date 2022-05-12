import { Recipe } from "./Recipe"
import { USER_ROLE } from "../types"

export class User {
    public recipes: Recipe[] = []
    public following: string[] = []

    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private role: USER_ROLE
    ) {
        this.id = id
        this.name = name
        this.email = email
        this.password = password
        this.role = role
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

    public getRole(): USER_ROLE {
        return this.role
    }
}