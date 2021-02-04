import mongoose from "mongoose"

const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    content: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
)

export default mongoose.model("Comment", CommentSchema)
