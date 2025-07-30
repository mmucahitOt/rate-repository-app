import Text from "../../common/Text";
import theme from "../../../configs/theme";
import {StyleSheet, View, Button, Alert, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import { useMutation } from "@apollo/client";
import { deleteReviewMutation, getMeQuery } from "../../../graphql";

const styles = StyleSheet.create({

  container: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  subContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 5,
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

  reviewActionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 5,
    margin: 1
  },
  button: {
    padding: 10,
    borderRadius: 5,
    margin: 5,
    minWidth: 100,
    alignItems: 'center',
  },
  showRepositoryButton: {
    backgroundColor: theme.colors.primary,
  },
  deleteButton: {
    backgroundColor: theme.colors.error,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
});
const ReviewItem = ({ review, showReviewActions = false }) => {
  const navigate = useNavigate();
  const [deleteReview] = useMutation(deleteReviewMutation, {
    refetchQueries: [{ query: getMeQuery }],
  });

  const handleViewRepository = () => {
    navigate(`/repositories/${review.repositoryId}`);
  };

  const handleDeleteReview = async () => {
    try {
      Alert.alert(
        "Delete Review",
        "Are you sure you want to delete this review?",
        [
          { text: "Delete", style: "destructive", onPress: async () => {
            try {
              await deleteReview({ variables: { deleteReviewId: review.id } });
              Alert.alert("Review deleted");
            } catch (error) {
              Alert.alert("Error deleting review");
            }
          }
          },
          {
            text: "Cancel",
            style: "cancel",
            onPress: () => {}
          }
        ]
      );
    } catch (error) {
      Alert.alert("Error deleting review");
    }
  };
  return (
    <View style={styles.container}>
    <View style={styles.subContainer}>
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
      {showReviewActions && (
        <View style={styles.reviewActionsContainer}>
          <Pressable 
            style={[styles.button, styles.showRepositoryButton]}
            onPress={handleViewRepository}
          >
            <Text style={styles.buttonText}>View Repository</Text>
          </Pressable>
          <Pressable 
            style={[styles.button, styles.deleteButton]}
            onPress={handleDeleteReview}
          >
            <Text style={styles.buttonText}>Delete Review</Text>
          </Pressable>
        </View>
      )}
      </View>
  );
};

export default ReviewItem;