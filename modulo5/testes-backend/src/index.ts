import app from "./app"
import { UserController } from './controller/UserController'
import { UserBusiness } from './business/UserBusiness'
import { UserDatabase } from './data/UserDatabase'

const userDatabase: UserDatabase = new UserDatabase()
const userBusiness: UserBusiness = new UserBusiness(userDatabase)
const userController: UserController = new UserController(userBusiness)

app.get("/users/profile/:id", userController.getUserById)