import { Request, Response } from "express"

const rootHandler = (_req: Request, res: Response) => res.send("API is working")

export default rootHandler
