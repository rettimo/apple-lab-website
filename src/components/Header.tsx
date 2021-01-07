/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container } from '@material-ui/core'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  const products = [
    {
      id: 0,
      name: 'iPhone',
      slug: 'iphone',
    },
    {
      id: 1,
      name: 'iPad',
      slug: 'ipad',
    },
    {
      id: 2,
      name: 'MacBook',
      slug: 'macbook',
    },
    {
      id: 3,
      name: 'Watch',
      slug: 'watch',
    },
    {
      id: 4,
      name: 'iMac',
      slug: 'imac',
    },
    {
      id: 5,
      name: 'AirPods',
      slug: 'air-pods',
    },
    {
      id: 6,
      name: 'Mac Pro',
      slug: 'mac-pro',
    },
    {
      id: 7,
      name: 'Mac mini',
      slug: 'mac-mini',
    },
    {
      id: 8,
      name: 'Apple TV',
      slug: 'apple-tv',
    },
    {
      id: 9,
      name: 'HomePod',
      slug: 'home-pod',
    },
    {
      id: 10,
      name: 'iPod',
      slug: 'ipod',
    },
  ]

  return (
    <header>
      <Container>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Главная</a>
              </Link>
            </li>
            {products.map(({ id, name, slug }) => (
              <li key={id}>
                <Link href={{ pathname: '/[product]', query: { product: slug } }}>
                  <a>{name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  )
}
