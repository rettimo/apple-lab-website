import { gql } from '@apollo/client'

export const typeDefs = gql`
  scalar StringOrArrayOfStrings
  scalar StringOrInt

  union Product =
      IPhone
    | IPad
    | MacBook
    | MacPro
    | MacMini
    | IMac
    | Watch
    | AppleTV
    | AirPods
    | HomePod
    | IPod

  interface BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
  }

  type IPhone implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
  }

  type IPad implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
    ruler: String
  }

  type MacBook implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
    ruler: String
    year: StringOrInt
    diagonal: Int
  }

  type MacPro implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
    year: StringOrInt
  }

  type MacMini implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
    year: StringOrInt
  }

  type IMac implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
  }

  type Watch implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
    diagonal: Int
  }

  type AppleTV implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
  }

  type AirPods implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
  }

  type HomePod implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
  }

  type IPod implements BaseInfo {
    id: Int!
    name: String!
    slug: String!
    img: String
    type: String
    model: StringOrArrayOfStrings
  }

  type Query {
    products(productType: String): [Product]
    product(id: Int!): Product!
  }
`
