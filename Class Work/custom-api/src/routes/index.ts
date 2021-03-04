import express from "express"
import authRoutes from "./auth"
import vendorRoutes from "./vendor"
import iceCreamRoutes from "./iceCream"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/vendor", vendorRoutes)
router.use("/icecream", iceCreamRoutes)

export default router
