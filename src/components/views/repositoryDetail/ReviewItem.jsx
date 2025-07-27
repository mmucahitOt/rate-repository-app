import Text from "../../common/Text";
import theme from "../../../configs/theme";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 1
  },

  ratingContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: 15,
    width: 30,
    height: 30,
  },

  ratingText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: "bold",
    color: theme.colors.primary,
  },

  usernameText: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: "bold",
    color: theme.colors.primary,
    margin: 5,
    borderRadius: 5,
  },

  contentText: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.text,
    margin: 5,
  },

  createdAtText: {
    fontSize: theme.fontSizes.caption,
    color: theme.colors.textSecondary,
    margin: 5,
  },

  contentContainer: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  reviewContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

});
const ReviewItem = ({ review }) => {
    console.log("review", JSON.stringify(review, null, 2));
  return (
    <View style={styles.container}>
      <View style={styles.ratingContainer}>
        <View style={styles.ratingTextContainer}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
      </View>
      <View>
      <View style={styles.reviewContainer}>
        <Text style={styles.usernameText}>{review.user.username}</Text>
        <Text style={styles.createdAtText}>{review.createdAt.split("T")[0]}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;