import mongoose from "mongoose"

const { Schema } = mongoose

const VendorSchema = new Schema({
  name: { type: String, required: true },
  foundedYear: { type: String },
  iceCreams: [{ type: Schema.Types.ObjectId, ref: "IceCream" }],
})

const Vendor = mongoose.model("Vendor", VendorSchema)

export default Vendor
