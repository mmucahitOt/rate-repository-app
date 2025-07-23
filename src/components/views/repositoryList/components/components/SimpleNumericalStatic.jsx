import { View, StyleSheet } from "react-native";
import Text from "../../../../common/Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

const SimpleNumericalStatic = ({
  value,
  label,
}) => {
  return (
    <View style={styles.container}>
      <Text fontSize="subheading" fontWeight="bold">{value}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default SimpleNumericalStatic;