import mongoose from "mongoose"
import bcrypt from "bcrypt"

const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    createdAt: { type: Date },
    updatedAt: { type: Date },
    username: { type: String, require: true },
    password: { type: String, select: false },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  { timestamps: { createdAt: "created_at" } }
)

UserSchema.pre("save", function (next) {
  const user = this
  if (!user.isModified("password")) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash
      next()
    })
  })
})

UserSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    done(err, isMatch)
  })
}

const User = mongoose.model("User", UserSchema)

export default User
