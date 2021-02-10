import mongoose from "mongoose"

const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: "created_at" } }
)

export default mongoose.model("Comment", CommentSchema)
