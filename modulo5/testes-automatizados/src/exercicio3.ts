export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
    BRAZILIAN = "BRAZILIAN",
    AMERICAN = "AMERICAN",
}

export interface User {
    name: string
    age: number
    nacionality: NACIONALITY
}

export interface Casino {
    name: string
    location: LOCATION
}

interface Result {
    brazilians: ResultItem
    americans: ResultItem
}

interface ResultItem {
    allowed: string[]
    unallowed: string[]
}

export const verifyAge = (casino: Casino, user: User[]): Result => {
    const americans: ResultItem = {
        allowed: [],
        unallowed: []
    }
    const brazilians: ResultItem = {
        allowed: [],
        unallowed: []
    }

    for (let i: number = 0; i < user.length; i++) {
        if (casino.location === LOCATION.EUA) {
            if (user[i].nacionality === NACIONALITY.AMERICAN) {
                if (user[i].age >= 21) {
                    americans.allowed.push(user[i].name)
                } else {
                    americans.unallowed.push(user[i].name)
                }
            } else if (user[i].nacionality === NACIONALITY.BRAZILIAN) {
                if (user[i].age >= 21) {
                    brazilians.allowed.push(user[i].name)
                } else {
                    brazilians.unallowed.push(user[i].name)
                }
            }
        }

        if (casino.location === LOCATION.BRAZIL) {
            if (user[i].nacionality === NACIONALITY.AMERICAN) {
                if (user[i].age >= 18) {
                    americans.allowed.push(user[i].name)
                } else {
                    americans.unallowed.push(user[i].name)
                }
            } else if (user[i].nacionality === NACIONALITY.BRAZILIAN) {
                if (user[i].age >= 18) {
                    brazilians.allowed.push(user[i].name)
                } else {
                    brazilians.unallowed.push(user[i].name)
                }
            }
        }
    }


    const result: Result = {
        americans,
        brazilians
    }

    return result
}