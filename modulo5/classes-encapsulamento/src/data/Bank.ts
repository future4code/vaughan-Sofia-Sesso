import { UserAccount } from "./UserAccount"

export class Bank {
    private accounts: UserAccount[]

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts
    }

    public getAllAccounts(): UserAccount[] {
        return this.accounts
    }

    public addAccount(newAccount: UserAccount): void {
        this.accounts.push(newAccount)
    }

    public removeAccount(userCPF: string): void {
        for (let i: number = 0; i < this.accounts.length; i++) {
            if (this.accounts[i].getCPF() === userCPF) {
                this.accounts.splice(i, 1)
            }
        }
    }
}

