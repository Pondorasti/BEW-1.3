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

  // Show single Post
  app.get("/posts/:id", (req, res) => {
    Post.findById(req.params.id)
      .lean()
      .populate("comments")
      .then((post) => {
        console.log(post.comments)
        res.render("posts-show", { post })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

  // Subreddit
  app.get("/n/:subreddit", (req, res) => {
    Post.find({ subreddit: req.params.subreddit })
      .lean()
      .then((posts) => {
        res.render("posts-index", { posts })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })
}
