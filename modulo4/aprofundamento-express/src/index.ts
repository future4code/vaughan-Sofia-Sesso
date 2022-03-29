import express from 'express'
import cors from 'cors'
import { toDo, toDoList } from './data'

const app = express()

app.use(express.json())
app.use(cors())

// Exercício 1:
app.get("/ping", (req, res) => {
    res.send("pong")
})

// Exercício 4:
app.get("/toDoList/:status", (req, res) => {
    if (req.params.status === "true" || req.params.status === "false") {
        let status: boolean
        if (req.params.status === "true") {
            status = true
        } else if (req.params.status === "false") {
            status = false
        }

        const toDoListFiltered: toDo[] = toDoList.filter((toDo: toDo) => {
            return toDo.completed === status
        })

        res.status(200).send(toDoListFiltered)
    } else {
        res.status(400).send("Parâmetro inválido")
    }
})

// Exercício 5:
app.post("/toDoList", (req, res) => {
    const newToDo: toDo = {
        userId: req.body.userId,
        id: Date.now(),
        title: req.body.title,
        completed: false
    }

    const toDoListUpdated: toDo[] = [
        ...toDoList, newToDo
    ]
    console.table(toDoListUpdated)

    if (!newToDo.title || !newToDo.userId) {
        res.status(400).send("Id do usuário ou título da tarefa inválidos")
    } else {
        res.status(200).send("Lista atualizada com sucesso!")
    }
})

// Exercício 6:
app.put("/toDoList/toDo/:id", (req, res) => {
    const toDoId: number = Number(req.params.id)

    const verifyId: boolean = toDoList.some((toDo: toDo) => {
        if (toDo.id === toDoId) {
            return true
        }
    })

    if (verifyId) {
        const toDoListUpdated: toDo[] = toDoList.map((toDo: toDo) => {
            if (toDo.id === toDoId) {
                return {
                    ...toDo,
                    completed: !toDo.completed
                }
            } else {
                return {
                    ...toDo
                }
            }
        })
        console.table(toDoListUpdated)

        res.status(200).send("Status da tarefa atualizado com sucesso!")
    } else {
        res.status(400).send("Id da tarefa inválido!")
    }
})

// Exercício 7:
app.delete("/toDoList/toDo/:id", (req, res) => {
    const toDoId: number = Number(req.params.id)

    const verifyId: boolean = toDoList.some((toDo: toDo) => {
        if (toDo.id === toDoId) {
            return true
        }
    })

    if (verifyId) {
        const toDoListUpdated: toDo[] = toDoList.filter((toDo: toDo) => {
            return toDo.id !== toDoId
        })
        console.table(toDoListUpdated)

        res.status(200).send("Tarefa deletada com sucesso!")
    } else {
        res.status(400).send("Id da tarefa inválido!")
    }
})

// Exercício 8:
app.get("/toDoList/user/:userId", (req, res) => {
    const userId: number = Number(req.params.userId)

    if (userId !== NaN) {
        const verifyId: boolean = toDoList.some((toDo: toDo) => {
            if (toDo.userId === userId) {
                return true
            }
        })

        if (verifyId) {
            const userToDos: toDo[] = toDoList.filter((toDo: toDo) => {
                return toDo.userId === userId
            })

            const otherTodos: toDo[] = toDoList.filter((toDo: toDo) => {
                return toDo.userId !== userId
            })

            const newToDoList = {
                selectedUser: userToDos,
                others: otherTodos
            }

            res.status(200).send(userToDos)

            // Exercício 10:
            // res.status(200).send(newToDoList)
        } else {
            res.status(400).send("Id do usuário inválido")
        }
    }
})

app.listen(3003, () => {
    console.log("Backend rodando na porta 3003!")
})