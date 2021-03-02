import mongoose, { Schema, Document, Types } from "mongoose"
import { VendorInterface } from "./vendor"

export interface IcreCreamInterface extends Document {
  name: string
  imgUrl?: string
  tags?: string[]
  rating: number
  vendor: VendorInterface["_id"]
}

const IceCreamSchema: Schema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String },
  tags: [{ type: String }],
  rating: { type: Number },

  vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
})

const IceCream = mongoose.model<IcreCreamInterface>("IceCream", IceCreamSchema)

export default IceCream
