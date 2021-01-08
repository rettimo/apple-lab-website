import { initializeApollo } from 'apollo/client'
import { Layout } from 'components/Layout'
import { ProductDocument, ProductsSlugDocument, useProductQuery } from 'generated/graphql'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'

const Product: NextPage = () => {
  const { query } = useRouter()

  const { data } = useProductQuery({ variables: { slug: query.slug as string } })

  return (
    <Layout>
      <h1>{data.product.name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: ProductsSlugDocument,
  })

  const paths = data.products.map(({ type, slug }) => ({
    params: { product: type, slug },
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
