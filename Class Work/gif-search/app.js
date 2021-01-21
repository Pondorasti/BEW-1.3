// Require Libraries

const express = require("express")
const exphbs = require("express-handlebars")
const Tenor = require("tenorjs").client({
  Key: "A8UV5083U09P",
  Filter: "high",
  Locale: "en_US",
})

// App Setup

const app = express()

// Middleware

app.use(express.static("public"))
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// Routes

app.get("/", (req, res) => {
  let term = ""
  if (req.query.term) {
    term = req.query.term
  }

  Tenor.Search.Query(term, "10")
    .then((response) => {
      const gifs = response
      res.render("home", { gifs })
    })
    .catch(console.error)
})

app.get("/greetings/:name", (req, res) => {
  const name = req.params.name

  res.render("greetings", { name })
})

// Start Server

app.listen(3000, () => {
  console.log("Hey! Gif search is up and running!")
})
