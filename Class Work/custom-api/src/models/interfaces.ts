import { Document } from "mongoose"

export interface IceCreamInterface extends Document {
  name: string
  imgUrl?: string
  tags?: string[]
  rating: number
  vendor: VendorInterface["_id"]
}

export interface VendorInterface extends Document {
  name: string
  foundedYear?: string
  iceCreams: IceCreamInterface["_id"]
}
