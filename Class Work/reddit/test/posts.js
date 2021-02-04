import app from "../server.js"
import chai from "chai"
import chaiHttp from "chai-http"

import Post from "../models/post"
import server from "../server"

const expect = chai.expect
chai.should()
chai.use(chaiHttp)

describe("Post", function () {
  const agent = chai.request.agent(server)

  const newPost = {
    title: "post title",
    url: "https://www.google.com",
    summary: "post summary",
    subreddit: "yolo",
  }

  it("should create with valid attributes at POST /posts/new", function (done) {
    Post.estimatedDocumentCount()
      .then(function (initialDocumentCount) {
        agent
          .post("/posts/new")

          // This line fakes a form post,
          // since we're not actually filling out a form
          .set("content-type", "application/x-www-form-urlencoded")
          .send(newPost)
          .then(function (res) {
            Post.estimatedDocumentCount()
              .then(function (newDocumentCount) {
                expect(res).to.have.status(200)
                expect(newDocumentCount).to.be.equal(initialDocumentCount + 1)
                done()
              })
              .catch(function (err) {
                done(err)
              })
          })
          .catch(function (err) {
            done(err)
          })
      })
      .catch(function (err) {
        done(err)
      })
  })

  after(function () {
    Post.findOneAndDelete(newPost)
  })
})
