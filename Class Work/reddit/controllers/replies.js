import Post from "../models/post"
import Comment from "../models/comment"
import User from "../models/user"

module.exports = (app) => {
  app.get("/posts/:postId/comments/:commentId/replies/new", (req, res) => {
    const currentUser = req.user
    let post

    Post.findById(req.params.postId)
      .lean()
      .then((p) => {
        post = p
        return Comment.findById(req.params.commentId).lean()
      })
      .then((comment) => {
        res.render("replies-new", { post, comment, currentUser })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

  app.post("/posts/:postId/comments/:commentId/replies", (req, res) => {
    const reply = new Comment(req.body)
    reply.author = req.user._id

    Post.findById(req.params.postId).then((post) => {
      Promise.all([reply.save(), Comment.findById(req.params.commentId)])
        .then(([reply, comment]) => {
          comment.comments.unshift(reply._id)

          return Promise.all([comment.save()])
        })
        .then(() => {
          res.redirect(`/posts/${req.params.postId}`)
        })
        .catch((error) => {
          console.log(error.message)
        })

      return post.save()
    })
  })
}
