import { products } from '../../mock/data'

type ProductsSearch = {
  productType?: string
}

type ProductSearch = {
  slug: string
}

export const productsResolvers = {
  Query: {
    products(_parent: any, { productType }: ProductsSearch, _context: any, _info: any) {
      if (productType) {
        const res = products.filter(product => product.type === productType)
        return res
      }

      return products
    },
    typeOfProducts(_parent: any, _args: any, _context: any, _info: any) {
      const res = new Set(products.map(p => p.type))
      return res
    },
    product(_parent: any, { slug }: ProductSearch, _context: any, _info: any) {
      const [res] = products.filter(product => product.slug === slug)
      return res
    },
  },
}
