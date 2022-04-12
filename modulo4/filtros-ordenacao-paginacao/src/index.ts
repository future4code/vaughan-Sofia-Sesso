import { app } from './app'
import { getUsersByName } from './endpoints/getUsersByName'
import { getAllUsersByType } from './endpoints/getAllUsersByType'
import { getAllUsersByOrder } from './endpoints/getAllUsersByOrder'
import { get5UsersByPage } from './endpoints/Get5UsersByPage'
import { getUsersAllFilters } from './endpoints/getUsersAllFilters'

// Exercício 1 a):
app.get("/users", getUsersByName)

// Exercício 1 b):
app.get("/users/byType/:type", getAllUsersByType)

// Exercício 2:
app.get("/users/orderBy", getAllUsersByOrder)

// Exercício 3:
app.get("/users/byPage/:page", get5UsersByPage)

// Exercício 4:
app.get("/users/allFilters", getUsersAllFilters)