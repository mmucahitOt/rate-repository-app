import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";

const App = () => {
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={createApolloClient()}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
