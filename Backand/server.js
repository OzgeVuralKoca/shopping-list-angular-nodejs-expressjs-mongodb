const connection = require("./context/db");
const express = require("express")
const cors = require("cors")

// Routers
const authRouter = require("./routers/auth.router")
const shoppingListRouter = require("./routers/shoppingList.router")

// Api application
const app = express();

//api type json
app.use(express.json());

// cors politication
app.use(cors());

// Db Connection
connection().then()

// AuthRouter
app.use("/api/auth/", authRouter);

// ShoppingList Router
app.use("/api/shoppinglist/", shoppingListRouter);

// listen server
app.listen(3000, ()=> console.log("Server is running..."));