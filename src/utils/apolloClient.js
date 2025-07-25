import { ApolloClient, InMemoryCache } from "@apollo/client";
import serverConfig from "../configs/serverConfig";

const createApolloClient = () => {
  return new ApolloClient({
    uri: serverConfig.graphqlUrl,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
