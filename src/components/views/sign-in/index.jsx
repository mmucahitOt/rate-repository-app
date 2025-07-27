import { Alert } from 'react-native';
import { useNavigate } from 'react-router-native';

import useSignIn from '../../../hooks/useSignIn';
import { useEffect, useContext } from 'react';
import SignInFormContainer from './SignInFormContainer';
import { AuthStorageContext } from '../../../contexts/AuthStorageContext';

const SignIn = () => {
  const navigate = useNavigate();
  const { authSignIn } = useContext(AuthStorageContext);
  const { isAuthenticated } = useContext(AuthStorageContext);
  
  const { signIn, result } = useSignIn();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/repositories');
    }
  }, [isAuthenticated]);

  useEffect(() => { 
    if (result.error) {
      Alert.alert('Error', result.error.message);
    }
  }, [result.error]);

  const handleSubmit = async (params) => {
    const { username, password } = params;
    const data = await signIn(username, password);
    if (data) {
      await authSignIn(data);
      navigate('/repositories');
    }
  };
  return <SignInFormContainer onSubmit={handleSubmit} />;
};

export default SignIn;