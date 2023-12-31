import { gql } from "@apollo/client";

const CREATE_CONTACT_MUTATION = gql`
    mutation CreateContactInfo($Name: String!, $email: String!, $phone: String!) {
        createContactInfo(input: {
            Name: $Name,
            email: $email,
            phone: $phone
        }) {
        id
        Name
        email
        phone
    }
  }
`;

const LOGIN_MUTATION = gql`
  mutation Login($email: String!, $password: String!){
    login(input: {
        email: $email,
        password: $password
    }) {
        token
    }
  }
`


const REGISTER_TOKEN_MUTATION = gql`
  mutation VerifyToken($token: String!){
    verifyToken(input: {
        token: $token
    }) {
      verifyToken
    }
  }
`


const PRE_USER_MUTATION = gql`
  mutation CreatePreUser($name: String!, $email: String!, $status: String!){
    createPreUser(input: {
        name: $name,
        email: $email,
        status: $status
    }) {
      id
    }
  }
`


export { CREATE_CONTACT_MUTATION, LOGIN_MUTATION, REGISTER_TOKEN_MUTATION, PRE_USER_MUTATION };