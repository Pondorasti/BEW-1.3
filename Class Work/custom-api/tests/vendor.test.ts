import "mocha"
import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../src"

chai.use(chaiHttp)

describe("Vendor Routes", () => {
  it("should return all vendors", async () => {
    expect(true).to.be.equal(true)
    const res = await chai.request(app).get("")
    expect(res.text).to.equal("API is working")
  })

  it("should get one vendor", () => {

  })

  it("should create a vendor", () => {

  })

  it("should update vendor", () => {

  })

  it("should delete vendor", () => {

  })
})
