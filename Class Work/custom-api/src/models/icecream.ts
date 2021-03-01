import mongoose from "mongoose"

const { Schema } = mongoose

const IceCreamSchema = new Schema({
  name: { type: String, required: true },
  imgUrl: { type: String },
  tags: [{ type: String }],
  rating: { type: Int8Array },

  vendor: { type: Schema.Types.ObjectId, ref: "Vendor", required: true },
})

const IceCream = mongoose.model("IceCream", IceCreamSchema)

export default IceCream
