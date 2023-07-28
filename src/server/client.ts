import { ApolloClient, InMemoryCache } from "@apollo/client"


const client = new ApolloClient({
    uri: process.env.URL_GRAPHQL,
    cache: new InMemoryCache()
})


export default client