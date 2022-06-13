import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api-us-east-1.graphcms.com/v2/cl4bneb8634nl01w83u2w32z3/master",
    
    cache: new InMemoryCache(),
});

export default client;