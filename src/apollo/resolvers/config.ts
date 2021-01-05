import { GraphQLScalarType, Kind } from 'graphql'
import { isArrayOfStrings } from '../../utils/isArrayOfStrings'

export const configResolvers = {
  Product: {
    __resolveType: (product: { type: string }) => {
      if (product.type === 'iphone') return 'IPhone'
      if (product.type === 'ipad') return 'IPad'
      if (product.type === 'macbook') return 'MacBook'
      if (product.type === 'mac-pro') return 'MacPro'
      if (product.type === 'mac-mini') return 'MacMini'
      if (product.type === 'imac') return 'IMac'
      if (product.type === 'watch') return 'Watch'
      if (product.type === 'apple-tv') return 'AppleTV'
      if (product.type === 'air-pods') return 'AirPods'
      if (product.type === 'home-pod') return 'HomePod'
      if (product.type === 'ipod') return 'IPod'
      return null
    },
  },

  //* String | Int
  StringOrInt: new GraphQLScalarType({
    name: 'StringOrInt',
    description: 'A String or an Int union type',
    serialize(value) {
      if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error('Value must be either a String or an Int')
      }

      if (typeof value === 'number' && !Number.isInteger(value)) {
        throw new Error('Number value must be an Int')
      }

      return value
    },
    parseValue(value) {
      if (typeof value !== 'string' && typeof value !== 'number') {
        throw new Error('Value must be either a String or an Int')
      }

      if (typeof value === 'number' && !Number.isInteger(value)) {
        throw new Error('Number value must be an Int')
      }

      return value
    },
    parseLiteral(ast) {
      switch (ast.kind) {
        case Kind.INT:
          return parseInt(ast.value, 10)
        case Kind.STRING:
          return ast.value
        default:
          throw new Error('Value must be either a String or an Int')
      }
    },
  }),

  //* String | [String]
  StringOrArrayOfStrings: new GraphQLScalarType({
    name: 'StringOrArrayOfStrings',
    description: 'a String or an array of strings union types',
    serialize(value) {
      if (typeof value !== 'string' && !isArrayOfStrings(value)) {
        throw new Error('Value must be either a String or an array of Strings')
      }

      return value
    },
    parseValue(value) {
      if (typeof value !== 'string' && !isArrayOfStrings(value)) {
        throw new Error('Value must be either a String or an array of Strings')
      }

      return value
    },
    parseLiteral(ast) {
      switch (ast.kind) {
        case Kind.STRING:
          return ast.value
        case Kind.LIST:
          return ast.values
        default:
          throw new Error('Value must be either a String or an array of Strings')
      }
    },
  }),
}
