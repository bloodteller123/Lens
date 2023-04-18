import { ApolloClient, InMemoryCache } from '@apollo/client'

const APIURL = process.env.NODE_ENV ==='production'? 'https://api.lens.dev/' : 'https://api-mumbai.lens.dev/';
// const APIURL = 'https://api.lens.dev/'
//https://www.apollographql.com/docs/react/get-started
const Client = new ApolloClient({
    uri: APIURL,
    cache: new InMemoryCache(),
  })

export default Client