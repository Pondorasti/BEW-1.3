import Post from "../models/post"

module.exports = (app) => {
  // Create
  app.post("/posts/new", (req, res) => {
    const post = new Post(req.body)

    post.save((err, post) => {
      return res.redirect("/")
    })
  })
}
