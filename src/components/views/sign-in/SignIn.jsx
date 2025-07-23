import { View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import Text from '../../common/Text';
import { StyleSheet } from 'react-native';
import theme from '../../../configs/theme';

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

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
      />
      <TextInput style={styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
      />
      <Pressable style={styles.button} onPress={formik.handleSubmit}>
        <Text>Sign In</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return <SignInForm onSubmit={onSubmit} />;
};

export default SignIn;