import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL = 'https://api.lens.dev/';
//https://www.apollographql.com/docs/react/get-started
const Client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  })

export default Client