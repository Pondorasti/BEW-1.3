import mongoose from "mongoose"

const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true },
    subreddit: { type: String, required: true },
  },
  { timestamps: { createdAt: "created_at" } }
)

export default mongoose.model("Posts", PostSchema)
