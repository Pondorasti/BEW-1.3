import app from "../server.js"
import chai from "chai"
import chaiHttp from "chai-http"

const should = chai.should()
chai.use(chaiHttp)

describe("site", function () {
  it("Should have home page", function (done) {
    chai
      .request(app)
      .get("/")
      .end(function (err, res) {
        if (err) {
          return done(err)
        }

        res.status.should.be.equal(200)
        return done()
      })
  })
})
