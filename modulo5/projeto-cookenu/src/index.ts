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

// User:
app.get("/user/feed", getUserFeed)
app.get("/user/profile", getUserProfile)
app.get("/user/:id", getAnotherUserProfile)
app.post("/user/follow", followUser)
app.post("/user/unfollow", unfollowUser)
app.post("/login", login)
app.post("/signup", signup)

// Recipe:
app.get("/recipe/:id", getRecipe)
app.post("/recipe", postRecipe)