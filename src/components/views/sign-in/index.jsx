import { View, TextInput, Pressable, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';
import { useFormik } from 'formik';
import Text from '../../common/Text';
import { StyleSheet } from 'react-native';
import theme from '../../../configs/theme';
import * as yup from 'yup';
import useSignIn from '../../../hooks/useSignIn';
import { useEffect } from 'react';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flexDirection: 'column',
    flex: 1,
    padding: 10,
  },
  textInput: {
    height: 40,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,  
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 10,
    marginHorizontal: 'auto',
    width: '100%',
    color: theme.colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(1, 'Username must be greater or equal to 1')
    .required('Username is required'),
  password: yup
    .string()
    .min(1, 'Password must be greater or equal to 1')
    .required('Password is required'),
});

const SignInForm = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
  });

  const navigate = useNavigate();

  const { signIn, result } = useSignIn();

  useEffect(() => { 
    if (result.error) {
      Alert.alert('Error', result.error.message);
    }
  }, [result.error]);

  const handleSubmit = async () => {
    const data = await signIn(formik.values.username, formik.values.password);
    if (data) {
      navigate('/repositories');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={[ styles.textInput, formik.touched.username && formik.errors.username && { borderColor: 'red' }]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        autoCapitalize="none"
      />
      {formik.touched.username && formik.errors.username && (
        <Text color="error">{formik.errors.username}</Text>
      )}
      <TextInput style={[ styles.textInput, formik.touched.password && formik.errors.password && { borderColor: 'red' }
      ]}
        secureTextEntry={true}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color="error">{formik.errors.password}</Text>
      )}
      <Pressable disabled={!formik.isValid} style={styles.button} onPress={handleSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const navigate = useNavigate();

  return <SignInForm onSubmit={navigate} />;
};

export default SignIn;