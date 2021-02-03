import "dotenv/config"
import express from "express"
import exphbs from "express-handlebars"

// App Setup

const app = express()

// Middleware

app.use(express.static("public"))
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Routes

app.get("/", (req, res) => {
  res.render("home")
})

// Start Server

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT} for now`)
})
