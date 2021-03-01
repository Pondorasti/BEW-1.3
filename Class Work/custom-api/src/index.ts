import express from "express"
import bodyParser from "body-parser"
import { rootHandler, helloHandler } from "./handlers"
import router from "./routes"
import "./config/databaseSetup"

// Setup
const app = express()
const port = process.env.PORT || 8000 // Database Setup

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Routes
app.get("/", rootHandler)
app.get("/hello/:name", helloHandler)
app.use(router)

// Start Server
app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

export default app
