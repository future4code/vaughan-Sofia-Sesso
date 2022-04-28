import app from "./app"
import { followUser } from "./endpoints/User/followUser"
import { getAnotherUserProfile } from "./endpoints/User/getAnotherUserProfile"
import { getRecipe } from "./endpoints/Recipe/getRecipe"
import { getUserProfile } from "./endpoints/User/getUserProfile"
import { login } from "./endpoints/User/login"
import { postRecipe } from "./endpoints/Recipe/postRecipe"
import { signup } from "./endpoints/User/signup"
import { unfollowUser } from "./endpoints/User/unfollowUser"
import { getUserFeed } from "./endpoints/User/getUserFeed"
import { editRecipe } from "./endpoints/Recipe/editRecipe"
import { deleteRecipe } from "./endpoints/Recipe/deleteRecipe"
import { deleteUserAccount } from "./endpoints/User/deleteUserAccount"

// User:
app.get("/user/feed", getUserFeed)
app.get("/user/profile", getUserProfile)
app.get("/user/:id", getAnotherUserProfile)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)
app.post("/login", login)
app.post("/signup", signup)
app.delete("/user/delete/:id", deleteUserAccount)

// Recipe:
app.get("/recipe/:id", getRecipe)
app.post("/recipe", postRecipe)
app.put("/recipe/edit/:id", editRecipe)
app.delete("/recipe/delete/:id", deleteRecipe)