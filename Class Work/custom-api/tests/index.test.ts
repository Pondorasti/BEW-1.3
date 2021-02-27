import "mocha"
import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../src"

chai.use(chaiHttp)

describe("Server Root", () => {
  it("should return a success message", async () => {
    expect(true).to.be.equal(true)
    const res = await chai.request(app).get("")
    expect(res.text).to.equal("API is working")
  })
})
