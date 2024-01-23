import {
    NextSSRInMemoryCache,
    NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

import { HttpLink } from '@apollo/client';

export const { getClient } = registerApolloClient(() => {
    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link: new HttpLink({
            uri: 'https://api.swiftstock.com.br/graphql',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    });
});
