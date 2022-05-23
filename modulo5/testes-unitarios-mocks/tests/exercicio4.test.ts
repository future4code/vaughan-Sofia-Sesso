describe("Mocking validateCharacter", () => {
    test("Returns true", () => {
        const mockValidateCharacter = jest.fn(() => {
            return true
        })
    })

    test("Returns false", () => {
        const mockValidateCharacter = jest.fn(() => {
            return false
        })
    })
})