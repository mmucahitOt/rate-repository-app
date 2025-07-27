import { View, TextInput, Pressable } from 'react-native';
import { useFormik } from 'formik';
import Text from '../../common/Text';
import { StyleSheet } from 'react-native';
import theme from '../../../configs/theme';
import * as yup from 'yup';

const styles = StyleSheet.create({
  container: {
    marginTop: 300,
    flexDirection: 'column',
    justifyContent: 'flex-start',
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
  confirmPassword: '',
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
  confirmPassword: yup
    .string()
    .min(1, 'Confirm Password must be greater or equal to 1')
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const SignUpFormContainer = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <View style={styles.container}>
      <TextInput style={[ styles.textInput, formik.touched.username && formik.errors.username && { borderColor: 'red' }]}
        placeholder="Username"
        value={formik.values.username}
        onChangeText={formik.handleChange('username')}
        onBlur={formik.handleBlur('username')}
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
        onBlur={formik.handleBlur('password')}
      />
      {formik.touched.password && formik.errors.password && (
        <Text color="error">{formik.errors.password}</Text>
      )}
      <TextInput style={[ styles.textInput, formik.touched.confirmPassword && formik.errors.confirmPassword && { borderColor: 'red' }
      ]}
        secureTextEntry={true}
        placeholder="Confirm Password"
        value={formik.values.confirmPassword}
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
      />
      {formik.touched.confirmPassword && formik.errors.confirmPassword && formik.errors.confirmPassword !== formik.values.password && (
        <Text color="error">{formik.errors.confirmPassword}</Text>
      )}
      <Pressable disabled={!formik.isValid} style={styles.button} onPress={() => onSubmit(formik.values)}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
};

export default SignUpFormContainer;