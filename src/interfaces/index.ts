import { Model, Document } from 'mongoose'

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
