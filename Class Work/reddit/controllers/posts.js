import Post from "../models/post"
import User from "../models/user"

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
    const user = req.user
    post.author = user._id

    post
      .save()
      .then((req, res) => {
        return User.findById(user._id)
      })
      .then((user) => {
        user.posts.unshift(post)
        user.save()
        res.redirect(`/posts/${post._id}`)
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

  // Show single Post
  app.get("/posts/:id", (req, res) => {
    const currentUser = req.user

    Post.findById(req.params.id)
      .lean()
      .then((post) => {
        res.render("posts-show", { post, currentUser })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })

  // Subreddit
  app.get("/n/:subreddit", (req, res) => {
    const currentUser = req.user

    Post.find({ subreddit: req.params.subreddit })
      .lean()
      .then((posts) => {
        res.render("posts-index", { posts, currentUser })
      })
      .catch((error) => {
        console.log(error.message)
      })
  })
}
