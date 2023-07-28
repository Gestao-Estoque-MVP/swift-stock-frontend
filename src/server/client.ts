import { ApolloClient, InMemoryCache } from "@apollo/client"



const getAuthHeaders = () => {
    const token = localStorage.getItem('token')

    return {
        'Authorization': `Bearer ${token}`,
		'Access-Control-Allow-Origin': '*'
    }
}

const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache(),
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
})



export {client}