import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
   uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rhidus134301z545rb5p2z/master',
   cache: new InMemoryCache()
});