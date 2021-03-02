import "mocha"
import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../src"

chai.use(chaiHttp)

describe("Ice Cream Routes", () => {
  it("should return all ice creams", async () => {
    expect(true).to.be.equal(true)
    const res = await chai.request(app).get("")
    expect(res.text).to.equal("API is working")
  })

  it("should get one icecream", () => {

  })

  it("should create icecream", () => {

  })

  it("should update icecream", () => {

  })

  it("should delete icecream", () => {

  })
})
