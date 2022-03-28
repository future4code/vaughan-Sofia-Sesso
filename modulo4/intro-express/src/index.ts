import express from 'express'
import cors from 'cors'
import { allUsers, allPosts } from './data'

const app = express()

app.use(express.json())
app.use(cors())


// Exercício 1:
app.get("/", (req, res) => {
    res.send("Requisição funcionando!")
})

// Exercício 4:
app.get("/users", (req, res) => {
    res.send(allUsers)
})

// Exercício 7:
app.get("/posts", (req, res) => {
    res.send(allPosts)
})

// Exercício 8:
app.get("/posts/:userId", (req, res) => {
    const userId = Number(req.params.userId)

    const postsByUserId = allPosts.filter((post) => {
        return post.userId === userId
    })

    res.send(postsByUserId)
})

// Exercício 9:
app.delete("/posts/:postId", (req, res) => {
    const postId = Number(req.params.postId)

    const postsUpdated = allPosts.filter((post) => {
        return post.id !== postId
    })
    console.log(postsUpdated)
    res.send("Post deletado com sucesso!")
})

// Exercício 10:
app.delete("/users/:userId", (req, res) => {
    const userId = Number(req.params.userId)

    const usersUpdated = allUsers.filter((user) => {
        return user.id !== userId
    })
    console.log(usersUpdated)
    res.send("Usuário deletado com sucesso!")
})

app.listen(3003, () => {
    console.log("O backend está rodando na porta 3003!")
})