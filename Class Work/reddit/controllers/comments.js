import Post from "../models/post"
import Comment from "../models/comment"

module.exports = (app) => {
  app.post("/posts/:postId/comments", (req, res) => {
    const comment = new Comment(req.body)

    comment
      .save()
      .then(() => {
        return Post.findById(req.params.postId)
      })
      .then((post) => {
        post.comments.unshift(comment)
        return post.save()
      })
      .then(() => {
        return res.redirect("/")
      })
      .catch((error) => {
        console.log(error)
      })
  })
}
