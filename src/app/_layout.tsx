import {Stack} from 'expo-router'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://sidikasem.stepzen.net/api/food/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization:
          'apikey sidikasem::stepzen.io+1000::d46050519e7d6c478481cc40e2188152753365ea1ab0458f55beaf95800317e3',
  },
});

const RootLayout = () => {
    return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
)}

export default RootLayout;