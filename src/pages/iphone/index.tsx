import { GetStaticProps, NextPage } from 'next'
import { Layout } from 'components/Layout'
import { initializeApollo } from 'apollo/client'
import { useProductsQuery, ProductsDocument } from 'generated/graphql'

const IPhonePage: NextPage = () => {
  const { data } = useProductsQuery({
    variables: {
      productType: 'iphone',
    },
  })

  return (
    <Layout>
      <h1>iPhone Page</h1>
      <div>
        {data.products.map(p => (
          <p key={p.id}>{p.name}</p>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ProductsDocument,
    variables: { productType: 'iphone' },
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}

export default IPhonePage
