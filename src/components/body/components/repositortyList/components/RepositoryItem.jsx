import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 5,
  },
});

const RepositoryItem = (props) => {
  return <View style={styles.container}>
    <Text>Full Name: {props.fullName}</Text>
    <Text>Description: {props.description}</Text>
    <Text>Language: {props.language}</Text>
    <Text>Forks: {props.forksCount}</Text>
    <Text>Stars: {props.stargazersCount}</Text>
    <Text>Rating Average: {props.ratingAverage}</Text>
    <Text>Review Count: {props.reviewCount}</Text>
  </View>;
};

export default RepositoryItem;