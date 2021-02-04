import User from "../models/user"
import jwt from "jsonwebtoken"

module.exports = (app) => {
  // Sign-up Form
  app.get("/sign-up", (req, res) => {
    res.render("sign-up")
  })

  // Sign-up Post
  app.post("/sign-up", (req, res) => {
    const user = new User(req.body)

    user
      .save()
      .then((user) => {
        var token = jwt.sign({ _id: user._id }, process.env.SECRET, {
          expiresIn: "60 days",
        })
        res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
        res.redirect("/")
      })
      .catch((error) => {
        console.log(error.message)
        return res.status(400).send({ error })
      })
  })
}
