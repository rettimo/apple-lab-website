import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/Layout'
import { initializeApollo } from 'apollo/client'
import { useProductsQuery, ProductsDocument, TypeOfProductsDocument } from 'generated/graphql'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Product: NextPage = () => {
  const router = useRouter()

  const { data } = useProductsQuery({
    variables: {
      productType: router.query.product as string,
    },
  })

  return (
    <Layout>
      <h1>Product Page</h1>
      <div>
        {data.products.map(product => (
          <p key={product.id}>
            <Link href={`/${router.query.product}/${product.slug}`}>
              <a>{product.name}</a>
            </Link>
          </p>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: TypeOfProductsDocument,
  })

  const paths = data.typeOfProducts.map(type => ({
    params: { product: type },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ProductsDocument,
    variables: { productType: params.product },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default Product
