import "dotenv/config"
import express from "express"
import exphbs from "express-handlebars"
import bodyParser from "body-parser"
import expressValidator from "express-validator"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"
import "./data/reddit-db"

// App Setup

const app = express()

// Middleware

app.use(express.static("public"))

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(expressValidator())

app.use(cookieParser())

const checkAuth = (req, res, next) => {
  if (
    typeof req.cookies.nToken === "undefined" ||
    req.cookies.nToken === null
  ) {
    req.user = null
  } else {
    const token = req.cookies.nToken
    const decodedToken = jwt.decode(token, { complete: true }) || {}
    req.user = decodedToken.payload
  }

  res.locals.currentUser = req.user

  next()
}
app.use(checkAuth)

// Routes

app.get("/", (req, res) => {
  res.redirect("/posts/")
})

require("./controllers/posts")(app)
require("./controllers/comments")(app)
require("./controllers/auth")(app)
require("./controllers/replies")(app)

// Start Server

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} for now`)
})

export default app
