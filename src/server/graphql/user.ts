import { client } from "../client";
import { gql } from '@apollo/client';


type User = {
    email: string;
    password: string;
}

const login = async ({email, password}:User) =>{
    client.mutate({
        mutation: gql`
            mutation {
                login(input:{
                    email: ${email}
                    password: ${password}
                }){
                    token
                }
            }
        `
    })
}

const teste = async ()=>{
    client.query({
        query:gql`
            {
                protected
            }
        `
    })
}






export {login, teste}