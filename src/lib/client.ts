import { ApolloClient, InMemoryCache, split, HttpLink} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { getMainDefinition } from '@apollo/client/utilities';

import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';


const wsLink = new GraphQLWsLink(createClient({
  url: `wss://eoljz7colzbefh5ntgm6p6kdpq.appsync-api.us-east-1.amazonaws.com/graphql`,
  connectionParams: {
    reconnect: true,
      headers: {
        'x-api-key': 'da2-vkr77s27zvfzxeelgnyjpifq5e',
      }
    }
}));

// const wsLink = new GraphQLWsLink(createClient({
//   uri: `wss://eoljz7colzbefh5ntgm6p6kdpq.appsync-api.us-east-1.amazonaws.com/graphql`,
//   options: {
//     reconnect: true,
//     connectionParams: {
//       headers: {
//         'x-api-key': 'da2-vkr77s27zvfzxeelgnyjpifq5e',
//       }
//     }
//   }
// }));

const httpLink = new HttpLink({
  uri: 'https://eoljz7colzbefh5ntgm6p6kdpq.appsync-api.us-east-1.amazonaws.com/graphql',
  headers: {
    'x-api-key': 'da2-vkr77s27zvfzxeelgnyjpifq5e',
  }
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const Client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});


export default Client
