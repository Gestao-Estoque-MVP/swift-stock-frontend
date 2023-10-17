import { gql } from "@apollo/client";

export const GET_USER = gql`
    {
        user {
            id
            name
            email
            user_phone{
                number
            }
        }
    }
`;