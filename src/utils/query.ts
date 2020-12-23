import { gql } from '@apollo/client'

export const IndexQuery = gql`
  query ViewerQuery {
    viewer {
      name
    }
  }
`
