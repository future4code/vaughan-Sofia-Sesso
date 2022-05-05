import app from './controller/app'
import { UserController } from './controller/UserController'
import { UserBusiness } from './business/UserBusiness'
import { UserDatabase } from './data/UserDatabase'
import { PostController } from './controller/PostController'
import { PostBusiness } from './business/PostBusiness'
import { PostDatabase } from './data/PostDatabase'

const userDatabase: UserDatabase = new UserDatabase()
const userBusiness: UserBusiness = new UserBusiness(userDatabase)
const userController: UserController = new UserController(userBusiness)

const postDatabase: PostDatabase = new PostDatabase()
const postBusiness: PostBusiness = new PostBusiness(postDatabase)
const postController: PostController = new PostController(postBusiness)

// User:
app.post("/signup", userController.signup)
app.post("/login", userController.login)
app.post("/add/:id", userController.addFriend)
app.delete("/unfriend/:id", userController.unfriend)

// Post:
app.get("/post/:id", postController.getPostById)
app.post("/post", postController.post)