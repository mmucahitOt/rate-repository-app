import { createContext, useEffect, useState } from "react";
import { useApolloClient } from "@apollo/client";

const AuthStorageContext = createContext();

const AuthStorageContextProvider = ({ authStorage, children }) => {
  const [auth, setAuth] = useState(undefined);

  const apolloClient = useApolloClient();

  useEffect(() => {
    authStorage.getAuth().then((auth) => {
      if (auth) {
        setAuth(auth);
      }
    });
  }, []);

  const authSignIn = async (auth) => {
    await authStorage.setAuth(auth);
    setAuth(auth);
  };

  const authSignOut = async () => {
    await authStorage.removeAuth();
    setAuth(undefined);
    apolloClient.resetStore();
  };

  return (
    <AuthStorageContext.Provider
      value={{
        auth: auth,
        isAuthenticated: auth !== undefined,
        accessToken: auth?.accessToken,
        authSignIn: authSignIn,
        authSignOut: authSignOut,
      }}
    >
      {children}
    </AuthStorageContext.Provider>
  );
};

export { AuthStorageContext, AuthStorageContextProvider };
