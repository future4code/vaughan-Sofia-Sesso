import { Character } from "./models/Character"
import { validateCharacter } from "./validateCharacter"

export const performAttackWithValidation = (attacker: Character, defender: Character): void => {
    const validAttacker = validateCharacter(attacker)
    const validDefender = validateCharacter(defender)

    if (!validAttacker || !validDefender) {
        throw new Error("Invalid Character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}

export const performAttackWithDependencyInversion = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
): void => {
    const validAttacker = validator(attacker)
    const validDefender = validator(defender)

    if (!validAttacker || !validDefender) {
        throw new Error("Invalid Character")
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense
    }
}