import app from "./app"
import { getAnotherUserProfile } from "./endpoints/User/getAnotherUserProfile"
import { getRecipe } from "./endpoints/Recipe/getRecipe"
import { getUserProfile } from "./endpoints/User/getUserProfile"
import { login } from "./endpoints/User/login"
import { postRecipe } from "./endpoints/Recipe/postRecipe"
import { signup } from "./endpoints/User/signup"

// User:
app.get("/user/profile", getUserProfile)
app.get("/user/:id", getAnotherUserProfile)
app.post("/login", login)
app.post("/signup", signup)

// Recipe:
app.get("/recipe/:id", getRecipe)
app.post("/recipe", postRecipe)