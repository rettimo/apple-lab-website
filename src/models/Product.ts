import { ProductDocument, ProductModel } from 'interfaces'
import { Schema, model, models } from 'mongoose'

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name for this product.'],
    unique: true,
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug for this product.'],
    unique: true,
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

export default models.Product || model<ProductDocument, ProductModel>('Product', ProductSchema)
