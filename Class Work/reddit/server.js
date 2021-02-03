import "dotenv/config"
import express from "express"
import exphbs from "express-handlebars"
import bodyParser from "body-parser"
import expressValidator from "express-validator"
import { body } from "express-validator/check"
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

// Routes

app.get("/", (req, res) => {
  res.redirect("/posts/")
})

app.get("/posts/new", (req, res) => {
  res.render("posts-new")
})
require("./controllers/posts")(app)

// Start Server

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} for now`)
})
