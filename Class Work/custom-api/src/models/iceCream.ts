import mongoose, { Schema } from "mongoose"
import { IceCreamInterface } from "./interfaces"

const IceCreamSchema: Schema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String },
  tags: [{ type: String }],
  rating: { type: Number },

  vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
})

const IceCream = mongoose.model<IceCreamInterface>("IceCream", IceCreamSchema)

export default IceCream
