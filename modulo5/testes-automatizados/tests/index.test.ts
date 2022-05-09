import { User, performPurchase } from "../src/index"

// Exercício 2:
describe("Testando performPurchase", () => {
    const user: User = {
        name: "Astrodev",
        balance: 100
    }

    test("Teste com um usuário com o saldo maior do que o valor de compra", () => {
        const result = performPurchase(user, 40)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 60
        })
    })

    test("Teste com um usuário com o saldo igual ao valor de compra", () => {
        const result = performPurchase(user, 100)

        expect(result).toEqual({
            name: "Astrodev",
            balance: 0
        })
    })

    test("Teste com um usuário com o saldo menor do que o valor de compra", () => {
        const result = performPurchase(user, 110)

        expect(result).toEqual(undefined)
    })
})