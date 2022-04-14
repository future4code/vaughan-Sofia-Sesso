import app from './app'
import createUser from './endpoints/createUser'
import getAllUsers from './endpoints/getAllUsers'
import createProduct from './endpoints/createProduct'
import getAllProducts from './endpoints/getAllProducts'
import createPurchase from './endpoints/createPurchase'
import getUserPurchases from './endpoints/getUserPurchases'

// users:
app.get("/users", getAllUsers)
app.get("/users/:user_id/purchases", getUserPurchases)
app.post("/users", createUser)

// products:
app.get("/products", getAllProducts)
app.post("/products", createProduct)

// purchases:
app.post("/purchases", createPurchase)