import app from "../server.js"
import chai from "chai"
import chaiHttp from "chai-http"
import User from "../models/user"

const should = chai.should()
chai.use(chaiHttp)

const USER_ID = "aaaaaaaaaaaa"
const userTemplate = {
  username: "Testestest",
  password: "testpassword",
  _id: USER_ID,
}

describe("User", function () {
  const agent = chai.request.agent(app)
  before(function (done) {
    const user = new User(userTemplate)

    user
      .save()
      .then(function (res) {
        done()
      })
      .catch(function (err) {
        done(err)
      })
  })

  // it("should not be able to sign in if they are not registered", function (done) {
  //   agent
  //     .post("/login", { email: "no", password: "nono" }) // wrong, should be username
  //     .end(function (err, res) {
  //       // res.status.should.be.equal(401)
  //       done()
  //     })
  //     .catch(function (err) {
  //       done(err)
  //     })
  // })

  it("should be able to signup", function (done) {
    // User.findOneAndRemove("test1", function () {
    agent
      .post("/sign-up")
      .send({ username: "test1", password: "1234" })
      .end(function (err, res) {
        res.status.should.be.equal(200)
        agent.should.have.cookie("nToken")
        done()
      })
    // })
  })

  it("should be able to login", function (done) {
    agent
      .post("/login")
      .send({
        username: "Testestest",
        password: "testpassword",
      })
      .end(function (err, res) {
        res.should.have.status(200)
        agent.should.have.cookie("nToken")
        done()
      })
  })

  it("should be able to logout", function (done) {
    agent
      .get("/logout")
      .end(function (err, res) {
        res.should.have.status(200)
        agent.should.not.have.cookie("nToken")
        done()
      })
      .catch(function (err) {
        done(err)
      })
  })

  after(function (done) {
    User.deleteMany({ username: ["test1", "Testestest"] })
      .then(function () {
        agent.close()
        done()
      })
      .catch(function (err) {
        done(err)
      })
  })
})
