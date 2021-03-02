import express from "express"
import vendorRoutes from "./vendor"
import iceCreamRoutes from "./iceCream"

const router = express.Router()

router.use("/vendor", vendorRoutes)
router.use("/icecream", iceCreamRoutes)

export default router
