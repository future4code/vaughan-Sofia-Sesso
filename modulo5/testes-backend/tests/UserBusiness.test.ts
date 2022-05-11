import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import { CustomError } from "../src/errors/CustomError"

const userDatabase = new UserDatabase()
const userBusiness = new UserBusiness(userDatabase)

describe("Testing getUserById", () => {
    test("Should catch error when id is not registered", async () => {
        expect.assertions(2)

        try {
            await userBusiness.getUserById("123")
        } catch (error) {
            if (error instanceof CustomError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Usuário não encontrado")
            } else {
                console.log(error)
            }
        }
    })
})