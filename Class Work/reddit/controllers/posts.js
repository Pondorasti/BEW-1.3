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

  app.post("/posts/*", (req, res, next) => {
    if (req.user) {
      return next()
    }
    return res.status(401).send({ error: "Log in first" })
  })

  // Create
  app.get("/posts/new", (req, res) => {
    res.render("posts-new")
  })

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
