import { useMutation } from "@apollo/client";
import signInMutation from "../graphql/mutations/signInMutation";
import { AuthStorageContext } from "../contexts/AuthStorageContext";
import { useContext } from "react";

const useSignIn = () => {
  const { authSignIn } = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(signInMutation);

  const signIn = async (username, password) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    if (data.authenticate) {
      await authSignIn({
        accessToken: data.authenticate.accessToken,
        expiresAt: data.authenticate.expiresAt,
        user: data.authenticate.user,
      });
    }

    return data.authenticate;
  };

  return { signIn, result };
};

export default useSignIn;
