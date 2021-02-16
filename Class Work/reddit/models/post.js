import mongoose from "mongoose"
import Populate from "../util/autopopulate"

const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true },
    subreddit: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    upVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    downVotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
    voteScore: { type: Number },
  },
  { timestamps: { createdAt: "created_at" } }
)

PostSchema.pre("findOne", Populate("author"))
  .pre("findOne", Populate("comments"))
  .pre("find", Populate("author"))

const Post = mongoose.model("Post", PostSchema)

export default Post
