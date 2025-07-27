import { useFormik } from "formik";
import { Pressable, StyleSheet, TextInput, View } from "react-native";
import * as yup from "yup";
import Text from "../../common/Text";
import theme from "../../../configs/theme";
import { useEffect } from "react";

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
  buttonDisabled: {
    backgroundColor: 'gray',
    opacity: 0.6,
  },
});

const ReviewCreateForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      repositoryName: "",
      ownerName: "",
      rating: "",
      text: "",
    },
    onSubmit,
    validationSchema: yup.object({
      repositoryName: yup.string().min(1, "Repository name is required").required("Repository name is required"),
      ownerName: yup.string().min(1, "Owner name is required").required("Owner name is required"),
      rating: yup.number().min(0, "Rating must be at least 0").max(100, "Rating must be at most 100").required("Rating is required"),
      text: yup.string().optional(),
    }),
    validateOnChange: true,
    validateOnBlur: true,
  });

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);

    return (
        <View style={styles.container}>
          <TextInput style={[ styles.textInput, formik.touched.repositoryName && formik.errors.repositoryName && { borderColor: 'red' }]}
            placeholder="Repository Name"
            value={formik.values.repositoryName}
            onChangeText={formik.handleChange('repositoryName')}
            onBlur={formik.handleBlur('repositoryName')}
            autoCapitalize="none"
          />
          {formik.touched.repositoryName && formik.errors.repositoryName && (
            <Text color="error">{formik.errors.repositoryName}</Text>
          )}
          <TextInput style={[ styles.textInput, formik.touched.ownerName && formik.errors.ownerName && { borderColor: 'red' }]}
            placeholder="Repository Owner Name"
            value={formik.values.ownerName}
            onChangeText={formik.handleChange('ownerName')}
            onBlur={formik.handleBlur('ownerName')}
            autoCapitalize="none"
        />
        {formik.touched.ownerName && formik.errors.ownerName && (
            <Text color="error">{formik.errors.ownerName}</Text>
          )}
          <TextInput style={[ styles.textInput, formik.touched.rating && formik.errors.rating && { borderColor: 'red' }]}
            placeholder="Rating between 0 and 100"
            value={formik.values.rating}
            onChangeText={formik.handleChange('rating')}
            onBlur={formik.handleBlur('rating')}
            keyboardType="numeric"
            autoCapitalize="none"
        />
        {formik.touched.rating && formik.errors.rating && (
            <Text color="error">{formik.errors.rating}</Text>
          )}
          <TextInput style={[ styles.textInput, formik.touched.text && formik.errors.text && { borderColor: 'red' }]}
            placeholder="Review"
            value={formik.values.text}
            onChangeText={formik.handleChange('text')}
            onBlur={formik.handleBlur('text')}
            multiline={true}
            numberOfLines={4}
        />
        {formik.touched.text && formik.errors.text && (
            <Text color="error">{formik.errors.text}</Text>
          )}
        <Pressable 
          disabled={!formik.isValid} 
          style={[styles.button, !formik.isValid && styles.buttonDisabled]} 
          onPress={() => onSubmit({
            repositoryName: formik.values.repositoryName,
            ownerName: formik.values.ownerName,
            rating: Number(formik.values.rating),
            text: formik.values.text !== "" ? formik.values.text : undefined,
          })}
        >
            <Text>Create Review</Text>
          </Pressable>
        </View>
    )
}

export default ReviewCreateForm;