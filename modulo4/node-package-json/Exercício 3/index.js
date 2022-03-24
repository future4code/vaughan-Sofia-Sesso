const task = process.argv[2]
let taskList = ["Fazer almoço", "Lavar a louça"]

const addTaskToList = () => {
    const newTaskList = [...taskList, task]
    console.log("Tarefa adicionada com sucesso!")
    console.log("tarefas: ", newTaskList)
}

addTaskToList()