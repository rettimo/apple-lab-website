import { ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/app'
import { useApollo } from 'apollo/client'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default App
