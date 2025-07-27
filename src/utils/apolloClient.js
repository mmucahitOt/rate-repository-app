import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import serverConfig from "../configs/appConfig";
const httpLink = createHttpLink({
  uri: serverConfig.graphqlUrl,
});

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const auth = await authStorage.getAuth();
      console.log(auth);
      return {
        headers: {
          ...headers,
          authorization: auth?.accessToken ? `Bearer ${auth.accessToken}` : "",
        },
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
      };
    }
  });
  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
