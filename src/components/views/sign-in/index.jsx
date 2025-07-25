import { Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import useSignIn from '../../../hooks/useSignIn';
import { useEffect } from 'react';
import SignInFormContainer from './SignInFormContainer';

const SignIn = () => {
  const navigate = useNavigate();

  const { signIn, result } = useSignIn();

  useEffect(() => { 
    if (result.error) {
      Alert.alert('Error', result.error.message);
    }
  }, [result.error]);

  const handleSubmit = async (params) => {
    const { username, password } = params;
    const data = await signIn(username, password);
    if (data) {
      navigate('/repositories');
    }
  };
  return <SignInFormContainer onSubmit={handleSubmit} />;
};

export default SignIn;