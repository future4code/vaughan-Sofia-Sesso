import express from 'express'
import cors from 'cors'
import { Product, productList } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1:
app.get("/test", (req, res) => {
    res.status(200).send("API funcionando!")
})

// Exercício 3 e 7:
app.post("/products", (req, res) => {
    try {
        const productName = req.body.name
        const productPrice = req.body.price

        if (!productName || (!productPrice && productPrice !== 0)) {
            throw new Error("Algum campo está vazio")
        } else if (typeof productName !== "string") {
            throw new Error("Campo 'name' inválido")
        } else if (typeof productPrice !== "number") {
            throw new Error("Campo 'price' inválido")
        } else if (productPrice <= 0) {
            throw new Error("Valor de 'price' tem que ser maior que zero")
        }

        const newProduct: Product = {
            id: Date.now().toString(),
            name: productName,
            price: productPrice
        }

        const newProductList: Product[] = [
            ...productList,
            newProduct
        ]
        console.table(newProductList)

        res.status(201).send("Produto adicionado à lista de produtos!")
    }
    catch (err: any) {
        switch (err.message) {
            case "Algum campo está vazio":
                res.status(422).send(err.message)
                break
            case "Campo 'name' inválido":
                res.status(422).send(err.message)
                break
            case "Campo 'price' inválido":
                res.status(422).send(err.message)
                break
            case "Valor de 'price' tem que ser maior que zero":
                res.status(422).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
                break
        }
    }
})

// Exercício 4 e 10:
app.get("/products", (req, res) => {
    try {
        const search = req.query.search

        if (search) {
            for (let i: number = 0; i < productList.length; i++) {
                if (productList[i].name.toLowerCase() === String(search).toLowerCase()) {
                    return res.status(200).send(productList[i])
                } else {
                    throw new Error("Produto não encontrado")
                }
            }
        } else {
            return res.status(200).send(productList)
        }

    }
    catch (err: any) {
        switch (err.message) {
            case "Produto não encontrado":
                res.status(404).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
                break
        }
    }
})

// Exercício 5, 8 e 11:
app.put("/products/:productId", (req, res) => {
    try {
        const productId: string = req.params.productId
        const newPrice: number = req.body.price
        const newName: string = req.body.name

        let productFound: boolean = false
        for (let i: number = 0; i < productList.length; i++) {
            if (productList[i].id === productId) {
                productFound = true
            }
        }

        if (typeof newPrice === "number" && newPrice <= 0) {
            throw new Error("Valor de 'price' tem que ser maior que zero")
        } else if (!newName && (!newPrice && newPrice !== 0)) {
            throw new Error("Os dois campos estão vazios")
        } else if (typeof newName !== "string") {
            throw new Error("Campo 'name' inválido")
        } else if (newPrice && typeof newPrice !== "number") {
            throw new Error("Campo 'price' inválido")
        } else if (!productFound) {
            throw new Error("Produto não encontrado")
        } else if (newName && newPrice) {
            const productUpdated = productList.map((product: Product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        name: newName,
                        price: newPrice
                    }
                } else {
                    return {
                        ...product
                    }
                }
            })
            console.table(productUpdated)

            res.status(200).send("Nome e preço atualizados com sucesso!")
        } else if (newName && !newPrice) {
            const productNameUpdated = productList.map((product: Product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        name: newName
                    }
                } else {
                    return {
                        ...product
                    }
                }
            })
            console.table(productNameUpdated)

            res.status(200).send("Nome atualizado com sucesso!")
        } else if (newPrice && !newName) {
            const productPriceUpdated = productList.map((product: Product) => {
                if (product.id === productId) {
                    return {
                        ...product,
                        price: newPrice
                    }
                } else {
                    return {
                        ...product
                    }
                }
            })
            console.table(productPriceUpdated)

            res.status(200).send("Preço atualizado com sucesso!")
        }

    }
    catch (err: any) {
        switch (err.message) {
            case "Os dois campos estão vazios":
                res.status(422).send(err.message)
                break
            case "Campo 'name' inválido":
                res.status(422).send(err.message)
                break
            case "Campo 'price' inválido":
                res.status(422).send(err.message)
                break
            case "Valor de 'price' tem que ser maior que zero":
                res.status(422).send(err.message)
                break
            case "Produto não encontrado":
                res.status(404).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
                break
        }
    }

})

// Exercício 6 e 9:
app.delete("/products/:productId", (req, res) => {
    try {
        const productId: string = req.params.productId

        let productFound = false
        for (let i: number = 0; i < productList.length; i++) {
            if (productList[i].id === productId) {
                productFound = true
            }
        }

        if (!productFound) {
            throw new Error("Produto não encontrado")
        }

        const productListUpdated = productList.filter((product: Product) => {
            return product.id !== productId
        })
        console.table(productListUpdated)

        res.status(200).send("Produto deletado com sucesso!")
    }
    catch (err: any) {
        switch (err.message) {
            case "Produto não encontrado":
                res.status(404).send(err.message)
                break
            default:
                res.status(500).send("Erro no servidor")
                break
        }
    }

})

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!")
})