import { NextSSRInMemoryCache, NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import  createUploadLink  from 'apollo-upload-client';


export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: createUploadLink({
      uri: "http://localhost:8080/graphql",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json',
      }
    }),
  });
});
