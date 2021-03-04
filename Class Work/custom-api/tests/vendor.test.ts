import "mocha"
import chai, { expect } from "chai"
import chaiHttp from "chai-http"
import app from "../src"
import User from "../src/models/user"

chai.use(chaiHttp)
chai.config.includeStack = true

const testUser = {
  username: "Alex5",
  password: "1234",
}

const testVendor = {
  name: "testest",
  founded: "0000",
}

const newVendorName = "Haggendasz"

describe("Vendor Routes", () => {
  let token: string
  let vendorId: string

  before(async () => {
    const user = new User(testUser)
    const savedUser = await user.save()
    token = savedUser.generateJWT()
  })

  after(async () => {
    await User.deleteMany({ username: testUser.username })
  })

  it("should return all vendors", async () => {
    const { body } = await chai.request(app).get("/vendor")

    expect(body).to.have.property("vendors")
    expect(body.vendors).to.be.an("array")
    expect(body.vendors).to.be.of.length.above(0)
  })

  it("should create a vendor", async () => {
    const { body } = await chai
      .request(app)
      .post("/vendor")
      .set({ Authorization: `Bearer ${token}` })
      .send(testVendor)

    expect(body).to.have.property("vendor")
    expect(body.vendor).to.have.property("iceCreams")
    expect(body.vendor.iceCreams).to.be.an("array")
    expect(body.vendor.iceCreams).to.be.lengthOf(0)
    expect(body.vendor).to.have.property("name")
    expect(body.vendor.name).to.be.equal(testVendor.name)
    expect(body.vendor).to.have.property("_id")
    vendorId = body.vendor._id
  })

  it("should get one vendor", async () => {
    const { body } = await chai
      .request(app)
      .get(`/vendor/${vendorId}`)
      .set({ Authorization: `Bearer ${token}` })
      .send(testVendor)

    expect(body).to.have.property("vendor")
    expect(body.vendor).to.have.property("iceCreams")
    expect(body.vendor.iceCreams).to.be.an("array")
    expect(body.vendor.iceCreams).to.be.lengthOf(0)
    expect(body.vendor).to.have.property("name")
    expect(body.vendor.name).to.be.equal(testVendor.name)
  })

  it("should update vendor", async () => {
    const name = newVendorName
    const { body } = await chai
      .request(app)
      .put(`/vendor/${vendorId}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({ name })

    expect(body).to.have.property("vendor")
    expect(body.vendor).to.have.property("iceCreams")
    expect(body.vendor.iceCreams).to.be.an("array")
    expect(body.vendor.iceCreams).to.be.lengthOf(0)
    expect(body.vendor).to.have.property("name")
    expect(body.vendor.name).to.be.equal(name)
  })

  it("should delete vendor", async () => {
    const { body } = await chai
      .request(app)
      .delete(`/vendor/${vendorId}`)
      .set({ Authorization: `Bearer ${token}` })

    expect(body).to.have.property("message", "Succesfully deleted.")
    expect(body).to.have.property("vendor")
    expect(body.vendor).to.have.property("iceCreams")
    expect(body.vendor.iceCreams).to.be.an("array")
    expect(body.vendor.iceCreams).to.be.lengthOf(0)
    expect(body.vendor).to.have.property("name")
    expect(body.vendor.name).to.be.equal(newVendorName)

    // I should also check the datababse to be empty, but me lazy
  })

  it("should fail to delete vendor", async () => {
    const { body } = await chai
      .request(app)
      .delete("/vendor/000000000000")
      .set({ Authorization: `Bearer ${token}` })

    expect(body).to.have.property("error", "Vendor does not exist.")
  })
})
