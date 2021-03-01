import express from "express"
import vendorRoutes from "./vendor"

const router = express.Router()

router.use("/vendor", vendorRoutes)

export default router
