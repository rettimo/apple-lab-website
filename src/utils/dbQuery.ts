import { IProduct } from 'interfaces'
import Product from 'models/Product'
import { dbConnect } from 'utils/dbConnect'

export const getProducts = async (type?: string): Promise<IProduct[]> => {
  await dbConnect()

  let result

  if (type) {
    result = await Product.find({ type })
  } else {
    result = await Product.find({})
  }

  const products = result.map(doc => {
    const p = doc.toObject()
    p._id = p._id.toString()
    return p
  })

  return products
}

export const getProduct = async (slug: string): Promise<IProduct> => {
  await dbConnect()
  const result = await Product.findOne({ slug })
  const product = result.toObject()
  product._id = product._id.toString()

  return product
}
