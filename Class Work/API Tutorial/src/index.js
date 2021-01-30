import "dotenv/config"
import cors from "cors"
import express from "express"
import routes from "./routes"
import models from "./models"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  req.context = {
    me: models.users[1],
    models,
  }
  next()
})

app.use("/session", routes.session)
app.use("/users", routes.user)
app.use("/messages", routes.message)

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.listen(process.env.PORT, () => {
  console.log("Hello from the other side")
})
