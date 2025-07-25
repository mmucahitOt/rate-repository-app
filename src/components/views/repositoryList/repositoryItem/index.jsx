import { View, StyleSheet, Image, Text as NativeText, Pressable } from "react-native";
import Text from "../../../common/Text";
import theme from "../../../../configs/theme";
import RepositoryStatistics from "./RepositoryStatistics";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    margin: 1
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  languageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 5,
    padding: 5,
    backgroundColor: theme.colors.primary,
  },
  language: {
    color: "white",
    fontSize: theme.fontSizes.caption,
    textAlign: "center",
  },
});

const RepositoryItem = ({
  id,
  ownerAvatarUrl,
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
}) => {
  const navigate = useNavigate();
  return (
    <Pressable onPress={() => { navigate(`/repositories/${id}`) }}>
  <View testID={`repositoryItem-${id}`} style={styles.container}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text fontWeight="bold">{fullName}</Text>
        <Text color="textSecondary" fontSize="caption">{description}</Text>
        <View style={styles.languageContainer}>
          <NativeText style={styles.language}>{language}</NativeText>
        </View>
      </View>
      </View>
      <RepositoryStatistics
        forksCount={forksCount}
        stargazersCount={stargazersCount}
        ratingAverage={ratingAverage}
        reviewCount={reviewCount}
      />
      </View>
    </Pressable>
  );
};

export default RepositoryItem;