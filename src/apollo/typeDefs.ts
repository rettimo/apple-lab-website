import { gql } from '@apollo/client'

export const typeDefs = gql`
  scalar StringOrArrayOfStrings
  scalar StringOrInt

  interface Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!
  }

  type IPhone implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!
  }

  type IPad implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
    ruler: String
  }

  type MacBook implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
    ruler: String
    year: StringOrInt
    diagonal: Int
  }

  type MacPro implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
    year: StringOrInt
  }

  type MacMini implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
    year: StringOrInt
  }

  type IMac implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
  }

  type Watch implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
    diagonal: Int
  }

  type AppleTV implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
  }

  type AirPods implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
  }

  type HomePod implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
  }

  type IPod implements Product {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String!

    # own
    model: StringOrArrayOfStrings
  }

  type Query {
    products(productType: String): [Product]
    typeOfProducts: [String]
    product(id: Int!): Product!
  }
`
