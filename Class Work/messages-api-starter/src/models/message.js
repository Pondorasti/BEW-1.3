const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MessageSchema = Schema({
  title: { type: String, required: true, select: false },
  body: { type: String, required: true, select: false },
  author: { type: Schema.Types.ObjectId, ref: "User", require: true },
})

const Message = mongoose.model("Message", MessageSchema)

module.exports = Message
