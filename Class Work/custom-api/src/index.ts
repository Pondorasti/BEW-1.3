import express, { RequestHandler } from "express"
// import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
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
app.use(cookieParser())
// app.use(expressValidator())
const checkAuth: RequestHandler = (req, res, next) => {
  if (typeof req.cookies.nToken === "undefined" || req.cookies.nToken === null) {
    req.user = null
  } else {
    const token = req.cookies.nToken
    const { payload } = jwt.decode(token, { complete: true }) as { payload: string }
    req.user = payload
  }

  res.locals.currentUser = req.user

  next()
}
app.use(checkAuth)

// Routes
app.get("/", rootHandler)
app.use(router)

// Start Server
app.listen(port, () => {
  console.log(`server is listening on ${port}`)
})

export default app
