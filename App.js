import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import { StatusBar } from "react-native";
import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";
import AuthStorage from "./src/utils/authStorage";
import { AuthStorageContextProvider } from "./src/contexts/AuthStorageContext";
import { PaperProvider } from "react-native-paper";

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

const App = () => {
  return (
    <PaperProvider>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContextProvider authStorage={authStorage}>
            <Main />
          </AuthStorageContextProvider>
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </PaperProvider>
  );
};

export default App;
