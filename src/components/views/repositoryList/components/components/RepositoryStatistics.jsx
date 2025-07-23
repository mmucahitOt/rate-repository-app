import { View } from "react-native";
import SimpleNumericalStatic from "./SimpleNumericalStatic";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});
const RepositoryStatistics = ({
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  return (
    <View style={styles.container}>
      <SimpleNumericalStatic value={forksCount} label="Forks" />
      <SimpleNumericalStatic value={stargazersCount} label="Stars" />
      <SimpleNumericalStatic value={ratingAverage} label="Rating" />
      <SimpleNumericalStatic value={reviewCount} label="Reviews" />
    </View>
  );
};

export default RepositoryStatistics;