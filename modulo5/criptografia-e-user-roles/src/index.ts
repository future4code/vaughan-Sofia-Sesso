import app from "./app"
import { createUser } from "./endpoints/createUser"
import { deleteUser } from "./endpoints/deleteUser"
import { getUser } from "./endpoints/getUser"
import { getUserInfoById } from "./endpoints/getUserInfoById"
import { login } from "./endpoints/login"

app.get("/user", getUserInfoById)
app.get("/user/profile", getUser)
app.post("/user/signup", createUser)
app.post("/user/login", login)
app.delete("/user/:id", deleteUser)