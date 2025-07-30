import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import serverConfig from "../configs/appConfig";
import { relayStylePagination } from "@apollo/client/utilities";

const httpLink = createHttpLink({
  uri: serverConfig.graphqlUrl,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
  },
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const auth = await authStorage.getAuth();
      return {
        headers: {
          ...headers,
          authorization: auth?.accessToken ? `Bearer ${auth.accessToken}` : "",
        },
      };
    } catch (e) {
      return {
        headers,
      };
    }
  });
  
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
  });
};

export default createApolloClient;
