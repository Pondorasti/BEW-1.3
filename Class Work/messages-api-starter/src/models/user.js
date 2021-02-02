const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true, select: false },
  messages: [{ type: Schema.Types.ObjectId, ref: "Message" }],
})

const User = mongoose.model("User", UserSchema)

UserSchema.pre("findOne", function (next) {
  this.populate("messages")
  next()
})

UserSchema.pre("find", function (next) {
  this.populate("messages")
  next()
})

module.exports = User
