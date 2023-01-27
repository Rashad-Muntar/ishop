import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../api/generated/graphql'

const client = new GraphQLClient(
  'https://8fwjszx32h.execute-api.us-east-1.amazonaws.com/dev/graphql',
  {
    headers: {
      //authorization: '',
    },
  }
)
export const graphql = getSdk(client)
