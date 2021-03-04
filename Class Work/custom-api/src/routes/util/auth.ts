import { Request } from "express"
import jwt from "express-jwt"

function getTokenFromHeader(req: Request): string | null {
  const authorizationHeaders = req.headers.authorization
  if (authorizationHeaders) {
    const type = req.headers.authorization.split(" ")[0]
    const token = req.headers.authorization.split(" ")[1]
    if (type === "Token" || type === "Bearer") {
      return token
    }
  }

  return null
}

const authRequired = jwt({
  secret: "process.env.SECRET",
  userProperty: "payload",
  getToken: getTokenFromHeader,
  algorithms: ["sha1", "RS256", "HS256"],
})

export default authRequired
