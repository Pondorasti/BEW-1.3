import express, { Request, Response } from "express"
import Vendor from "../models/vendor"
import IceCream from "../models/iceCream"
import authRequired from "./util/auth"

const router = express.Router()

// Get All Ice Creams
router.get("/", async (req: Request, res: Response) => {
  try {
    const iceCreams = await IceCream.find()
    res.send({ iceCreams })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Get Ice Cream by id
router.get("/:iceCreamId", async (req: Request, res: Response) => {
  try {
    const { iceCreamId } = req.params
    const iceCream = await IceCream.findOne({ _id: iceCreamId })
    res.json({ iceCream })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Add new Ice Cream
router.post("/", authRequired, async (req: Request, res: Response) => {
  try {
    const iceCream = new IceCream(req.body)
    const result = await iceCream.save()

    const vendor = await Vendor.findById(iceCream.vendor)
    vendor.iceCreams.unshift(result)
    await vendor.save()

    res.json({ iceCream: result })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Update Ice Cream by id
router.put("/:iceCreamId", authRequired, async (req: Request, res: Response) => {
  try {
    const { iceCreamId } = req.params
    await IceCream.findByIdAndUpdate(iceCreamId, req.body)
    const updatedIceCream = await IceCream.findOne({ _id: iceCreamId })
    res.json({ iceCream: updatedIceCream })
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

// Delete Ice Cream by id
router.delete("/:iceCreamId", authRequired, async (req: Request, res: Response) => {
  try {
    const { iceCreamId } = req.params
    const deletedIceCream = await IceCream.findByIdAndDelete(iceCreamId)
    if (deletedIceCream === null) {
      res.json({ error: "Ice Cream does not exist." })
    } else {
      res.json({
        message: "Succesfully deleted.",
        iceCream: deletedIceCream,
      })
    }
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
})

export default router
