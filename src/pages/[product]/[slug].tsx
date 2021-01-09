import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { getProduct, getProducts } from 'utils/dbQuery'
import { IProduct } from 'interfaces'

import { Layout } from 'components/Layout'

const ProductPage: NextPage<{ product: IProduct }> = ({ product }) => {
  return (
    <Layout>
      <h1>{product.name}</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await getProducts()

  const paths = products.map(({ type, slug }) => ({
    params: { product: type, slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const product = await getProduct(slug as string)

  return {
    props: {
      product,
    },
    revalidate: 1 * 60 * 60 * 24, // one day
  }
}

export default ProductPage
