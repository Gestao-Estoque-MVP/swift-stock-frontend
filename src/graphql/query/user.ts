import { gql } from '@apollo/client';

export const GET_USER = gql`
    {
        user {
            id
            name
            email
            createdAt
            updatedAt
            user_phone {
                number
            }
            role {
                name
            }
            image {
                url
            }
        }
    }
`;
