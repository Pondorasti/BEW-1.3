import express, { Request, Response } from "express"
import Vendor from "../models/vendor"
import authRequired from "./util/auth"

const router = express.Router()

// Get all Vendors
router.get("/", async (req: Request, res: Response) => {
  try {
    const vendors = await Vendor.find()
    res.json({ vendors })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Get Vendor by id
router.get("/:vendorId", async (req: Request, res: Response) => {
  try {
    const { vendorId } = req.params
    const vendor = await Vendor.findOne({ _id: vendorId })
    res.json({ vendor })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Add new Vendor
router.post("/", authRequired, async (req: Request, res: Response) => {
  try {
    const vendor = new Vendor(req.body)
    const result = await vendor.save()
    res.json({ vendor: result })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Update Vendor by id
router.put("/:vendorId", authRequired, async (req: Request, res: Response) => {
  try {
    const { vendorId } = req.params
    await Vendor.findByIdAndUpdate(vendorId, req.body)
    const updatedVendor = await Vendor.findOne({ _id: vendorId })
    res.json({ vendor: updatedVendor })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Delete Vendor by id
router.delete("/:vendorId", authRequired, async (req: Request, res: Response) => {
  try {
    const { vendorId } = req.params
    const deletedVendor = await Vendor.findByIdAndDelete(vendorId)
    if (deletedVendor === null) {
      res.json({ error: "Vendor does not exist." })
    } else {
      res.json({
        message: "Succesfully deleted.",
        vendor: deletedVendor,
      })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

export default router
