import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** a String or an array of strings union types */
  StringOrArrayOfStrings: any
  /** A String or an Int union type */
  StringOrInt: any
}

export type Product = {
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
}

export type IPhone = Product & {
  __typename?: 'IPhone'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type IPad = Product & {
  __typename?: 'IPad'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  ruler?: Maybe<Scalars['String']>
}

export type MacBook = Product & {
  __typename?: 'MacBook'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  ruler?: Maybe<Scalars['String']>
  year?: Maybe<Scalars['StringOrInt']>
  diagonal?: Maybe<Scalars['Int']>
}

export type MacPro = Product & {
  __typename?: 'MacPro'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  year?: Maybe<Scalars['StringOrInt']>
}

export type MacMini = Product & {
  __typename?: 'MacMini'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  year?: Maybe<Scalars['StringOrInt']>
}

export type IMac = Product & {
  __typename?: 'IMac'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type Watch = Product & {
  __typename?: 'Watch'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  diagonal?: Maybe<Scalars['Int']>
}

export type AppleTv = Product & {
  __typename?: 'AppleTV'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type AirPods = Product & {
  __typename?: 'AirPods'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type HomePod = Product & {
  __typename?: 'HomePod'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type IPod = Product & {
  __typename?: 'IPod'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type Query = {
  __typename?: 'Query'
  products?: Maybe<Array<Maybe<Product>>>
  product: Product
}

export type QueryProductsArgs = {
  productType?: Maybe<Scalars['String']>
}

export type QueryProductArgs = {
  id: Scalars['Int']
}

export type ProductsQueryVariables = Exact<{
  productType?: Maybe<Scalars['String']>
}>

export type ProductsQuery = { __typename?: 'Query' } & {
  products?: Maybe<
    Array<
      Maybe<
        | ({ __typename?: 'IPhone' } & Pick<IPhone, 'id' | 'name'>)
        | ({ __typename?: 'IPad' } & Pick<IPad, 'id' | 'name'>)
        | ({ __typename?: 'MacBook' } & Pick<MacBook, 'id' | 'name'>)
        | ({ __typename?: 'MacPro' } & Pick<MacPro, 'id' | 'name'>)
        | ({ __typename?: 'MacMini' } & Pick<MacMini, 'id' | 'name'>)
        | ({ __typename?: 'IMac' } & Pick<IMac, 'id' | 'name'>)
        | ({ __typename?: 'Watch' } & Pick<Watch, 'id' | 'name'>)
        | ({ __typename?: 'AppleTV' } & Pick<AppleTv, 'id' | 'name'>)
        | ({ __typename?: 'AirPods' } & Pick<AirPods, 'id' | 'name'>)
        | ({ __typename?: 'HomePod' } & Pick<HomePod, 'id' | 'name'>)
        | ({ __typename?: 'IPod' } & Pick<IPod, 'id' | 'name'>)
      >
    >
  >
}

export const ProductsDocument = gql`
  query Products($productType: String) {
    products(productType: $productType) {
      id
      name
    }
  }
`

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      productType: // value for 'productType'
 *   },
 * });
 */
export function useProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>,
) {
  return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions)
}
export function useProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions)
}
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>
