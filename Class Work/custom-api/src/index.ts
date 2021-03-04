import express from "express"
// import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import rootHandler from "./handlers"
import router from "./routes"
import "./config/databaseSetup"

// Setup
// dotenv.config()
const app = express()
const port = process.env.PORT || 8000 // Database Setup

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(helmet())
app.use(cors())

// Routes
app.get("/", rootHandler)
app.use(router)

// Start Server
app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

export default app
