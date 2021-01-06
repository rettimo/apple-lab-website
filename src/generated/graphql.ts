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
  type: Scalars['String']
}

export type IPhone = Product & {
  __typename?: 'IPhone'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type IPad = Product & {
  __typename?: 'IPad'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  ruler?: Maybe<Scalars['String']>
}

export type MacBook = Product & {
  __typename?: 'MacBook'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
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
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  year?: Maybe<Scalars['StringOrInt']>
}

export type MacMini = Product & {
  __typename?: 'MacMini'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  year?: Maybe<Scalars['StringOrInt']>
}

export type IMac = Product & {
  __typename?: 'IMac'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type Watch = Product & {
  __typename?: 'Watch'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
  diagonal?: Maybe<Scalars['Int']>
}

export type AppleTv = Product & {
  __typename?: 'AppleTV'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type AirPods = Product & {
  __typename?: 'AirPods'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type HomePod = Product & {
  __typename?: 'HomePod'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type IPod = Product & {
  __typename?: 'IPod'
  id: Scalars['Int']
  name: Scalars['String']
  slug: Scalars['String']
  img?: Maybe<Scalars['String']>
  type: Scalars['String']
  model?: Maybe<Scalars['StringOrArrayOfStrings']>
}

export type Query = {
  __typename?: 'Query'
  products?: Maybe<Array<Maybe<Product>>>
  typeOfProducts?: Maybe<Array<Maybe<Scalars['String']>>>
  product: Product
}

export type QueryProductsArgs = {
  productType?: Maybe<Scalars['String']>
}

export type QueryProductArgs = {
  id: Scalars['Int']
}

export type ProductQueryVariables = Exact<{
  id: Scalars['Int']
}>

export type ProductQuery = { __typename?: 'Query' } & {
  product:
    | ({ __typename?: 'IPhone' } & Pick<IPhone, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'IPad' } & Pick<IPad, 'model' | 'ruler' | 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'MacBook' } & Pick<MacBook, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'MacPro' } & Pick<MacPro, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'MacMini' } & Pick<MacMini, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'IMac' } & Pick<IMac, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'Watch' } & Pick<Watch, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'AppleTV' } & Pick<AppleTv, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'AirPods' } & Pick<AirPods, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'HomePod' } & Pick<HomePod, 'id' | 'name' | 'slug'>)
    | ({ __typename?: 'IPod' } & Pick<IPod, 'id' | 'name' | 'slug'>)
}

export type ProductsQueryVariables = Exact<{
  productType?: Maybe<Scalars['String']>
}>

export type ProductsQuery = { __typename?: 'Query' } & {
  products?: Maybe<
    Array<
      Maybe<
        | ({ __typename?: 'IPhone' } & Pick<IPhone, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'IPad' } & Pick<IPad, 'model' | 'ruler' | 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'MacBook' } & Pick<MacBook, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'MacPro' } & Pick<MacPro, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'MacMini' } & Pick<MacMini, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'IMac' } & Pick<IMac, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'Watch' } & Pick<Watch, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'AppleTV' } & Pick<AppleTv, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'AirPods' } & Pick<AirPods, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'HomePod' } & Pick<HomePod, 'id' | 'name' | 'slug'>)
        | ({ __typename?: 'IPod' } & Pick<IPod, 'id' | 'name' | 'slug'>)
      >
    >
  >
}

export type TypeOfProductsQueryVariables = Exact<{ [key: string]: never }>

export type TypeOfProductsQuery = { __typename?: 'Query' } & Pick<Query, 'typeOfProducts'>

export const ProductDocument = gql`
  query Product($id: Int!) {
    product(id: $id) {
      id
      name
      slug
      ... on IPad {
        model
        ruler
      }
    }
  }
`

/**
 * __useProductQuery__
 *
 * To run a query within a React component, call `useProductQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useProductQuery(
  baseOptions: Apollo.QueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  return Apollo.useQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions)
}
export function useProductLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ProductQuery, ProductQueryVariables>,
) {
  return Apollo.useLazyQuery<ProductQuery, ProductQueryVariables>(ProductDocument, baseOptions)
}
export type ProductQueryHookResult = ReturnType<typeof useProductQuery>
export type ProductLazyQueryHookResult = ReturnType<typeof useProductLazyQuery>
export type ProductQueryResult = Apollo.QueryResult<ProductQuery, ProductQueryVariables>
export const ProductsDocument = gql`
  query Products($productType: String) {
    products(productType: $productType) {
      id
      name
      slug
      ... on IPad {
        model
        ruler
      }
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
export const TypeOfProductsDocument = gql`
  query TypeOfProducts {
    typeOfProducts
  }
`

/**
 * __useTypeOfProductsQuery__
 *
 * To run a query within a React component, call `useTypeOfProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTypeOfProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTypeOfProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTypeOfProductsQuery(
  baseOptions?: Apollo.QueryHookOptions<TypeOfProductsQuery, TypeOfProductsQueryVariables>,
) {
  return Apollo.useQuery<TypeOfProductsQuery, TypeOfProductsQueryVariables>(
    TypeOfProductsDocument,
    baseOptions,
  )
}
export function useTypeOfProductsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TypeOfProductsQuery, TypeOfProductsQueryVariables>,
) {
  return Apollo.useLazyQuery<TypeOfProductsQuery, TypeOfProductsQueryVariables>(
    TypeOfProductsDocument,
    baseOptions,
  )
}
export type TypeOfProductsQueryHookResult = ReturnType<typeof useTypeOfProductsQuery>
export type TypeOfProductsLazyQueryHookResult = ReturnType<typeof useTypeOfProductsLazyQuery>
export type TypeOfProductsQueryResult = Apollo.QueryResult<
  TypeOfProductsQuery,
  TypeOfProductsQueryVariables
>
