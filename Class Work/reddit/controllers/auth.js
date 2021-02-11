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
        const token = jwt.sign({ _id: user._id }, process.env.SECRET, {
          expiresIn: "60 days",
        })
        res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
        return res.redirect("/")
      })
      .catch((error) => {
        console.log(error.message)
        return res.status(400).send({ error })
      })
  })

  app.get("/logout", (req, res) => {
    res.clearCookie("nToken")
    res.redirect("/")
  })

  app.get("/login", (req, res) => {
    res.render("login")
  })

  app.post("/login", (req, res) => {
    const username = req.body.username
    const password = req.body.password

    User.findOne({ username }, "username password")
      .then((user) => {
        if (!user) {
          return res.status(401).send({ message: "Wrong username" })
        }

        user.comparePassword(password, (err, isMatch) => {
          if (!isMatch) {
            return res.status(401).send({ message: "Wrong password" })
          }

          const token = jwt.sign(
            { _id: user._id, username: user.username },
            process.env.SECRET,
            {
              expiresIn: "60 days",
            }
          )

          res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
          res.redirect("/")
        })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })
}
