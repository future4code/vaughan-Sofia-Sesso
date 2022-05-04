import app from "./data/app"
import { UserController } from "./controller/UserController"

const userController: UserController = new UserController()

app.get("/all", userController.getAllUsers)
app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.delete("/:id", userController.deleteUser)