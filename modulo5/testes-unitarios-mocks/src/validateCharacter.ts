import { Character } from "./models/Character"

export const validateCharacter = (input: Character): boolean => {
    if (!input.name || typeof input.name !== 'string') {
        return false
    }

    if (!input.life || typeof input.life !== 'number' || input.life < 0) {
        return false
    }

    if (!input.defense || typeof input.defense !== 'number' || input.defense < 0) {
        return false
    }

    if (!input.strength || typeof input.strength !== 'number' || input.strength < 0) {
        return false
    }

    return true
}