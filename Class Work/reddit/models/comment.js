import mongoose from "mongoose"
import Populate from "../util/autopopulate"

const Schema = mongoose.Schema

const CommentSchema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: { createdAt: "created_at" } }
)

CommentSchema.pre("findOne", Populate("author"))
  .pre("find", Populate("author"))
  .pre("findOne", Populate("comments"))
  .pre("find", Populate("comments"))

export default mongoose.model("Comment", CommentSchema)
