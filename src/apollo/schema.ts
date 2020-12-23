import { makeExecutableSchema } from 'graphql-tools'
import { typeDefs } from './typeDefs'
import { productsResolvers } from './resolvers/product'
import { configResolvers } from './resolvers/config'

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers: [configResolvers, productsResolvers],
})
