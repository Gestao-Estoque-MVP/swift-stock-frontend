import { ApolloClient, InMemoryCache } from "@apollo/client"

const getAuthHeaders = () => {
    const token = localStorage.getItem('token')

    return {
        'Authorization': `Bearer ${token}`,
    }
}


const client = new ApolloClient({
    uri: "https://swift-stock-api-jb2ymony6q-rj.a.run.app/graphql",
    cache: new InMemoryCache(),
})



export {client}