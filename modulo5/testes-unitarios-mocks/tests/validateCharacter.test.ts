import { validateCharacter } from "../src/validateCharacter"
import { Character } from "../src/models/Character"

// Exercício 2:

describe("Testing validateCharacter", () => {
    // a)
    test("Should return false for empty name", () => {
        const character: Character = {
            name: "",
            life: 1500,
            defense: 400,
            strength: 200
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // b)
    test("Should return false for life 0", () => {
        const character: Character = {
            name: "Astrodev",
            life: 0,
            defense: 400,
            strength: 200
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // c)
    test("Should return false for strength 0", () => {
        const character: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 400,
            strength: 0
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // d)
    test("Should return false for defense 0", () => {
        const character: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 0,
            strength: 200
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // e)
    test("Should return false for life, defense or strength < 0", () => {
        const character: Character = {
            name: "Astrodev",
            life: -1500,
            defense: 400,
            strength: 200
        }

        const result = validateCharacter(character)

        expect(result).toBe(false)
    })

    // f)
    test("Should return true for all valid inputs", () => {
        const character: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 400,
            strength: 200
        }

        const result = validateCharacter(character)

        expect(result).toBe(true)
    })
})