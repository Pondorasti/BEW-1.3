import Post from "../models/post"

module.exports = (app) => {
  // Show all Posts
  app.get("/posts/", (req, res) => {
    Post.find({})
      .lean()
      .then((posts) => {
        res.render("posts-index", { posts })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

  // Create
  app.post("/posts/new", (req, res) => {
    const post = new Post(req.body)

    post.save((err, post) => {
      return res.redirect("/")
    })
  })
}
