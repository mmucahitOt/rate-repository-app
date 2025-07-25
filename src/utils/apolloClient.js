import { ApolloClient, InMemoryCache } from "@apollo/client";
import serverConfig from "../configs/appConfig";

const createApolloClient = () => {
  return new ApolloClient({
    uri: serverConfig.graphqlUrl,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
