import express, { Request, Response } from "express"
// import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
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
app.use(router)
app.get("/", (req: Request, res: Response) => {
  res.send("API is working")
})

// Start Server
app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

export default app
