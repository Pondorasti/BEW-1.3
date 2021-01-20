// Require Libraries
const express = require("express");

// App Setup
const app = express();

// Middleware
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes

app.get("/", (req, res) => {
  console.log(req.query);

  res.render("home");
});

app.get("/greetings/:name", (req, res) => {
  const name = req.params.name;

  res.render("greetings", { name });
});

// Start Server

app.listen(3000, () => {
  console.log("Hey! Gif search is up and running!");
});
