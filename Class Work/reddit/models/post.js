import mongoose from "mongoose"

const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    summary: { type: String, required: true },
    subreddit: { type: String, required: true },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: "created_at" } }
)

PostSchema.pre("find", function (next) {
  this.populate("author")
  next()
})

PostSchema.pre("findOne", function (next) {
  this.populate("author")
  this.populate("comments")
  next()
})

const Post = mongoose.model("Post", PostSchema)

export default Post
