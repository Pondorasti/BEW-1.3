import mongoose, { Schema } from "mongoose"
import { VendorInterface } from "./interfaces"

const VendorSchema: Schema = new Schema({
  name: { type: String, required: true },
  foundedYear: { type: String },
  iceCreams: [{ type: Schema.Types.ObjectId, ref: "IceCream" }],
})

const Vendor = mongoose.model<VendorInterface>("Vendor", VendorSchema)

export default Vendor
