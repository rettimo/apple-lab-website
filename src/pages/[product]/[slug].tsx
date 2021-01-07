import { initializeApollo } from 'apollo/client'
import { ProductsByTypeDocument, ProductDocument, useProductQuery } from 'generated/graphql'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const Product: NextPage = () => {
  const {
    query: { slug },
  } = useRouter()

  const { data } = useProductQuery({ variables: { slug: slug as string } })

  return <div>{data.product.name}</div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: ProductsByTypeDocument,
    variables: { productType: 'iphone' },
  })

  const paths = data.products.map(({ slug }) => ({
    params: { product: 'iphone', slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ProductDocument,
    variables: { slug },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Product
