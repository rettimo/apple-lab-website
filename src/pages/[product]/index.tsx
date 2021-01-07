import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/Layout'
import { initializeApollo } from 'apollo/client'
import { useProductsQuery, ProductsDocument, TypeOfProductsDocument } from 'generated/graphql'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ProductList: NextPage = () => {
  const {
    query: { product },
  } = useRouter()

  const { data } = useProductsQuery({
    variables: {
      productType: product as string,
    },
  })

  return (
    <Layout>
      <h1>Product Page</h1>
      <div>
        {data.products.map(p => {
          return (
            <p key={p.id}>
              <Link
                href={{
                  pathname: '/[product]/[slug]',
                  query: {
                    product,
                    slug: p.slug,
                  },
                }}
              >
                <a>{p.name}</a>
              </Link>
            </p>
          )
        })}
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query({
    query: TypeOfProductsDocument,
  })

  const paths = data.typeOfProducts.map((type: string) => ({
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

export default ProductList
