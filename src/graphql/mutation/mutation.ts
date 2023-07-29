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

export { CREATE_CONTACT_MUTATION };