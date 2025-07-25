import { useMutation, useApolloClient } from "@apollo/client";
import signInMutation from "../graphql/mutations/signInMutation";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const [mutate, result] = useMutation(signInMutation);

  const signIn = async (username, password) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    if (data.authenticate) {
      await authStorage.setAuth({
        accessToken: data.authenticate.accessToken,
        expiresAt: data.authenticate.expiresAt,
        user: data.authenticate.user,
      });
      apolloClient.resetStore();
    }

    return data.authenticate;
  };

  return { signIn, result };
};

export default useSignIn;
