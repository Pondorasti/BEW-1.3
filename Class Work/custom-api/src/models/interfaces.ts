import { Document } from "mongoose"

export interface IcreCreamInterface extends Document {
  name: string
  imgUrl?: string
  tags?: string[]
  rating: number
  vendor: VendorInterface["_id"]
}

export interface VendorInterface extends Document {
  name: string
  foundedYear?: string
  iceCreams: IcreCreamInterface["_id"]
}
