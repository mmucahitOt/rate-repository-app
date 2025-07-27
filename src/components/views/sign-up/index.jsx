import { Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import useSignIn from '../../../hooks/useSignIn';
import { useEffect } from 'react';
import SignInFormContainer from './SignUpFormContainer';
import { useMutation } from '@apollo/client';
import { createUser } from '../../../graphql/mutations';

const SignUp = () => {
  const navigate = useNavigate();

  const { signIn, signInResult } = useSignIn();
  const [signUp, createUserResult] = useMutation(createUser);

  useEffect(() => { 
    if (createUserResult?.error) {
      Alert.alert('Error', createUserResult?.error.message);
    }
  }, [createUserResult?.error]);

  useEffect(() => {
    if (signInResult?.error) {
      Alert.alert('Error', signInResult?.error.message);
    }
  }, [signInResult?.error]);

  const handleSubmit = async (params) => {
    const { username, password } = params;
    await signUp({ variables: { user: { username, password } } });
    await signIn(username, password);
    navigate('/repositories');
  };
  return <SignInFormContainer onSubmit={handleSubmit} />;
};

export default SignUp;