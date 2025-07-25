import { useMutation } from "@apollo/client";
import signInMutation from "../graphql/mutations/signInMutation";
import UserStorage from "../storages/UserStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(signInMutation);

  const signIn = async (username, password) => {
    const { data } = await mutate({
      variables: { credentials: { username, password } },
    });
    if (data.authenticate) {
      await UserStorage.setUser({
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
