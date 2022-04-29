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
import { forgotPassword } from "./endpoints/User/forgotPassword"

// User:
app.get("/user/feed", getUserFeed) // Pegar feed de receitas
app.get("/user/profile", getUserProfile) // Pegar próprio perfil
app.get("/user/:id", getAnotherUserProfile) // Pegar perfil de outro usuário
app.post("/user/follow", followUser) // Seguir usuário
app.post("/user/unfollow", unfollowUser) // Deixar de seguir usuário
app.post("/login", login) // Login
app.post("/signup", signup) // Cadastro de usuário
app.put("/user/edit/password", forgotPassword) // Alterar senha do usuário
app.delete("/user/delete/:id", deleteUserAccount) // Deletar conta

// Recipe:
app.get("/recipe/:id", getRecipe) // Pegar receita
app.post("/recipe", postRecipe) // Criar receita
app.put("/recipe/edit/:id", editRecipe) // Editar receita
app.delete("/recipe/delete/:id", deleteRecipe) // Deletar receita