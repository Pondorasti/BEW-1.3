import express, { Request, Response } from "express"
import User from "../models/user"

const router = express.Router()

// Register new user
router.post("/register", async (req: Request, res: Response) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    const token = savedUser.generateJWT()

    res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
    res.send({ message: "Succesfully signed up.", token })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Logout user
router.get("/logout", (req: Request, res: Response) => {
  res.clearCookie("nToken")
  res.send({ message: "Succesfully logged out." })
})

// Login user
router.post("/login", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body

    const user = await User.findOne({ username }, "username password")
    if (!user) {
      res.status(401).send({ message: "Wrong username" })
      return
    }

    user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        res.status(401).send({ error: "Wrong password" })
        return
      }

      const token = user.generateJWT()
      res.cookie("nToken", token, { maxAge: 900000, httpOnly: true })
      res.send({ message: "Succesfully signed in.", token })
    })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

export default router
