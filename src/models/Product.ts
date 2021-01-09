/* eslint-disable func-names */
import { Schema, model, Model, Document, models } from 'mongoose'

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
  },
  slug: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  modelIds: {
    type: [String],
    required: false,
  },
  line: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  diagonal: {
    type: Number,
    required: false,
  },
})

export interface IProduct {
  _id: string
  name: string
  slug: string
  img?: string
  type?: string
  modelIds?: Array<string>
  line?: string
  year?: number
}

export type ProductDocument = IProduct & Document

export type ProductModel = Model<ProductDocument>

export default models.Product || model<ProductDocument, ProductModel>('Product', ProductSchema)
