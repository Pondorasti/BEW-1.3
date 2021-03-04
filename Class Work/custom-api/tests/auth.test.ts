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

describe("Auth Routes", () => {
  after(async () => {
    await User.deleteMany({ username: testUser.username })
  })

  it("should register user", async () => {
    const { body } = await chai.request(app).post("/auth/register").send(testUser)

    expect(body).to.have.property("message", "Succesfully signed up.")
    expect(body).to.have.property("token")
  })

  it("should login user", async () => {
    const { body } = await chai.request(app).post("/auth/login").send(testUser)

    expect(body).to.have.property("message", "Succesfully signed in.")
    expect(body).to.have.property("token")
  })
})
