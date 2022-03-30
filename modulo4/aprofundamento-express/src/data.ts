// Exercício 2:
export type toDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3:
export const toDoList: toDo[] = [
    {
        userId: 1,
        id: 1,
        title: "Fazer compras",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Levar o cachorro pra passear",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Preparar almoço",
        completed: true
    },
    {
        userId: 2,
        id: 4,
        title: "Lavar as louças",
        completed: true
    },
    {
        userId: 3,
        id: 5,
        title: "Lavar roupas",
        completed: true
    },
    {
        userId: 3,
        id: 6,
        title: "Colocar roupas no varal",
        completed: false
    },
    {
        userId: 4,
        id: 7,
        title: "Checar e responder emails",
        completed: false
    },
    {
        userId: 4,
        id: 8,
        title: "Ir no correio",
        completed: true
    },
    {
        userId: 5,
        id: 9,
        title: "Treinar na academia",
        completed: false
    },
    {
        userId: 5,
        id: 10,
        title: "Aula de boxe",
        completed: false
    }
]