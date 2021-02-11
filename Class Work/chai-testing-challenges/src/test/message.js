require("dotenv").config()
const app = require("../server.js")
const mongoose = require("mongoose")
const chai = require("chai")
const chaiHttp = require("chai-http")
const assert = chai.assert

const User = require("../models/user.js")
const Message = require("../models/message.js")

chai.config.includeStack = true

const expect = chai.expect
const should = chai.should()
chai.use(chaiHttp)

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {}
  mongoose.modelSchemas = {}
  mongoose.connection.close()
  done()
})

const USER_ID = "aaaaaaaaaaaa"
const MESSAGE_ID = "bbbbbbbbbbbb"

const messageTemplate = {
  title: "test title",
  body: "test body",
  author: USER_ID,
  _id: MESSAGE_ID,
}

describe("Message API endpoints", () => {
  beforeEach((done) => {
    const sampleUser = new User({
      username: "testuser",
      password: "password",
      _id: USER_ID,
    })
    const sampleMessage = new Message({
      title: "test title",
      body: "test body",
      author: USER_ID,
      _id: MESSAGE_ID,
    })
    sampleUser
      .save()
      .then(() => {
        return sampleMessage.save()
      })
      .then(() => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })

  afterEach((done) => {
    Message.deleteMany({ _id: MESSAGE_ID })
      .then(() => {
        return User.deleteMany({ _id: USER_ID })
      })
      .then(() => {
        done()
      })
      .catch((err) => {
        done(err)
      })
  })

  it("should load all messages", (done) => {
    chai
      .request(app)
      .get("/messages")
      .end((err, res) => {
        if (err) {
          done(err)
        }

        expect(res).to.have.status(200)
        expect(res.body.messages).to.be.an("array")
        done()
      })
  })

  it("should get one specific message", (done) => {
    chai
      .request(app)
      .get(`/messages/${MESSAGE_ID}`)
      .end((err, res) => {
        if (err) {
          done(err)
        }

        expect(res).to.have.status(200)
        expect(res.body).to.be.an("object")
        expect(res.body.title).to.be.equal(messageTemplate.title)
        expect(res.body.body).to.be.equal(messageTemplate.body)
        done()
      })
  })

  it("should post a new message", (done) => {
    chai
      .request(app)
      .post("/messages")
      .send({
        title: "testest title",
        body: "testest body",
        author: USER_ID,
      })
      .end((err, res) => {
        if (err) {
          done(err)
        }

        expect(res).to.have.status(200)
        expect(res.body).to.be.an("object")
        expect(res.body).to.have.property("title", "testest title")
        expect(res.body).to.have.property("body", "testest body")

        Message.findOne({ title: "testest title" })
          .then((message) => {
            expect(message).to.be.an("object")
            done()
          })
          .catch((err) => {
            done(err)
          })
      })
  })

  it("should update a message", (done) => {
    chai
      .request(app)
      .put(`/messages/${MESSAGE_ID}`)
      .send({ title: "modified title" })
      .end((err, res) => {
        if (err) {
          done(err)
        }

        expect(res.body).to.be.an("object")
        expect(res.body.title).to.be.equal("modified title")

        Message.findOne({ _id: MESSAGE_ID }).then((message) => {
          expect(message).to.be.an("object")
          done()
        })
      })
  })

  it("should delete a message", (done) => {
    chai
      .request(app)
      .delete(`/messages/${MESSAGE_ID}`)
      .end((err, res) => {
        if (err) {
          done(err)
        }

        expect(res.body.title).to.be.equal(messageTemplate.title)
        expect(res.body.body).to.be.equal(messageTemplate.body)

        Message.findById(MESSAGE_ID).then((res) => {
          expect(res).to.be.equal(null)
          done()
        })
      })
  })
})
