import { User, Casino, verifyAge, NACIONALITY, LOCATION } from '../src/exercicio3'

// Exercício 4:
describe("Testing verifyAge (ex4)", () => {
    test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])

        expect(result.brazilians.allowed).toEqual(["Astrodev"])
    })

    test("1 american allowed", () => {
        const american: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american])

        expect(result.americans.allowed).toEqual(["Astrodev"])
    })

    test("No one allowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        }

        const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [brazilian, brazilian, american, american])

        expect(result.americans.unallowed).toEqual(["Astrodev EUA", "Astrodev EUA"])
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"])
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        }

        const american: User = {
            name: "Astrodev EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [brazilian, brazilian, american, american])

        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"])
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"])
    })
})

// Exercício 5:
describe("Testing verifyAge (ex5)", () => {
    test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [brazilian])

        expect(result.brazilians.allowed.length).toBeLessThan(2)
        expect(result.brazilians.allowed.length).toBeGreaterThan(0)
    })

    test("1 american allowed", () => {
        const american: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL
        }

        const result = verifyAge(casino, [american])

        expect(result.americans.unallowed.length).toBe(0)
    })

    test("No one allowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        }

        const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [brazilian, brazilian, american, american])

        expect(result.americans.unallowed).toContain("Astrodev EUA")
        expect(result.brazilians.unallowed).toContain("Astrodev BR")
    })

    test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        }

        const american: User = {
            name: "Astrodev EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        }

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        }

        const result = verifyAge(casino, [brazilian, brazilian, american, american])

        expect(result.brazilians.unallowed.length).toBeGreaterThan(1)
        expect(result.americans.unallowed.length).toBeLessThan(1)
        expect(result.americans.allowed.length).toBe(2)
    })
})