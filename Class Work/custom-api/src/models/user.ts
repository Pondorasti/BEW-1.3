import mongoose, { Schema, Document } from "mongoose"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export interface UserInterface extends Document {
  username: string
  password: string
  comparePassword(password: string, done: (error: Error, data: string) => void): void
  generateJWT(): string
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true, select: false },
})

UserSchema.pre<UserInterface>("save", function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this
  if (!user.isModified("password")) {
    next()
    return
  }

  bcrypt.genSalt(10, (saltErr: Error, salt: string) => {
    bcrypt.hash(user.password, salt, (hashErr: Error, hash: string) => {
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (this: UserInterface, password: string, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch)
  })
}

UserSchema.methods.generateJWT = function (this: UserInterface) {
  const token = jwt.sign(
    { _id: this._id, username: this.username, password: this.password },
    "process.env.SECRET",
    {
      expiresIn: "60 days",
    }
  )
  return token
}

const User = mongoose.model<UserInterface>("User", UserSchema)

export default User
