import { Character } from "../src/models/Character"
import { performAttackWithDependencyInversion } from "../src/performAttack"

// Exercício 5:

describe("Testing performAttack (ex5)", () => {
    // a)
    test("Defender life is equal to 1450", () => {
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 600,
            strength: 450,
        }

        const defender: Character = {
            name: "Superman",
            life: 1500,
            defense: 400,
            strength: 200
        }

        const mockValidateCharacter = jest.fn(() => {
            return true
        })

        performAttackWithDependencyInversion(attacker, defender, mockValidateCharacter as any)

        expect(defender.life).toBe(1450)
        expect(mockValidateCharacter).toHaveBeenCalled()
        expect(mockValidateCharacter).toHaveBeenCalledTimes(2)
        expect(mockValidateCharacter).toHaveReturnedTimes(2)
    })

    // b)
    test("Should return error for invalid defender life", () => {
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 600,
            strength: 450,
        }

        const defender: Character = {
            name: "Superman",
            life: -1500,
            defense: 400,
            strength: 200
        }

        const mockValidateCharacter = jest.fn(() => {
            return false
        })
        try {
            performAttackWithDependencyInversion(attacker, defender, mockValidateCharacter as any)
        }
        catch (error: any) {
            expect(error.message).toBe("Invalid Character")
            expect(mockValidateCharacter).toHaveBeenCalled()
            expect(mockValidateCharacter).toHaveBeenCalledTimes(2)
            expect(mockValidateCharacter).toHaveReturnedTimes(2)
        }
    })
})

// Exercício 6:

describe("Testing performAttack (ex6)", () => {
    test("Defender defense greater than attacker strength", () => {
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 600,
            strength: 300,
        }

        const defender: Character = {
            name: "Superman",
            life: 1500,
            defense: 400,
            strength: 200
        }

        const mockValidateCharacter = jest.fn(() => {
            return true
        })

        performAttackWithDependencyInversion(attacker, defender, mockValidateCharacter as any)

        expect(defender.life).toBe(1500)
        expect(defender.life).toBeGreaterThanOrEqual(1500)
        expect(defender.life).toBeGreaterThan(1450)
    })

    test("Defender defense greater equal to attacker strength", () => {
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 600,
            strength: 400,
        }

        const defender: Character = {
            name: "Superman",
            life: 1500,
            defense: 400,
            strength: 200
        }

        const mockValidateCharacter = jest.fn(() => {
            return true
        })

        performAttackWithDependencyInversion(attacker, defender, mockValidateCharacter as any)

        expect(defender.life).toBe(1500)
    })

    test("Should return error for invalid defender life and attacker life", () => {
        const attacker: Character = {
            name: "Astrodev",
            life: -1500,
            defense: 600,
            strength: 450,
        }

        const defender: Character = {
            name: "Superman",
            life: -1500,
            defense: 400,
            strength: 200
        }

        const mockValidateCharacter = jest.fn(() => {
            return false
        })
        try {
            performAttackWithDependencyInversion(attacker, defender, mockValidateCharacter as any)
        }
        catch (error: any) {
            expect(error.message).toBe("Invalid Character")
            expect(mockValidateCharacter).toHaveBeenCalled()
            expect(mockValidateCharacter).toHaveBeenCalledTimes(2)
            expect(mockValidateCharacter).toHaveReturnedTimes(2)
        }
    })

    test("Defender life is equal to less than zero", () => {
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 600,
            strength: 1800,
        }

        const defender: Character = {
            name: "Superman",
            life: 1500,
            defense: 200,
            strength: 200
        }

        const mockValidateCharacter = jest.fn(() => {
            return true
        })

        performAttackWithDependencyInversion(attacker, defender, mockValidateCharacter as any)

        expect(defender.life).toBe(-100)
    })
})