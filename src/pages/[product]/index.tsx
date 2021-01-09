import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Product, { IProduct } from 'models/Product'
import { dbConnect } from 'utils/dbConnect'

import Link from 'next/link'
import { Layout } from 'components/Layout'
import { getProducts } from 'utils/dbQuery'

const ProductList: NextPage<{ products: Array<IProduct> }> = ({ products }) => {
  return (
    <Layout>
      <h1>Product Page</h1>
      <div>
        {products.map(p => {
          return (
            <p key={p._id}>
              <Link
                href={{
                  pathname: '/[product]/[slug]',
                  query: {
                    product: p.type,
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
  await dbConnect()

  const products = await getProducts()

  const paths = products.map(({ type }) => ({
    params: { product: type },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { product } }) => {
  const products = await getProducts(product as string)

  return {
    props: {
      products,
    },
    revalidate: 1 * 60 * 60 * 24, // one day
  }
}

export default ProductList
