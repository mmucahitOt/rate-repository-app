import { Image, Linking, Pressable, StyleSheet, View, Text as NativeText } from "react-native";
import theme from "../../../configs/theme";
import RepositoryStatistics from "../repositoryList/repositoryItem/RepositoryStatistics";
import Text from "../../common/Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
  },
  detailContainer: {
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

  pressable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    margin: 10,
  },
});

const RepositoryInfo = ({ repository }) => {

  return (
    <View style={styles.container}>
    <View style={styles.detailContainer}>
    <View style={styles.imageContainer}>
      <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text fontWeight="bold">{repository.fullName}</Text>
        <Text color="textSecondary" fontSize="caption">{repository.description}</Text>
        <View style={styles.languageContainer}>
          <NativeText style={styles.language}>{repository.language}</NativeText>
        </View>
      </View>
      </View>
      <RepositoryStatistics
        forksCount={repository.forksCount}
        stargazersCount={repository.stargazersCount}
        ratingAverage={repository.ratingAverage}
        reviewCount={repository.reviewCount}
        />
        <Pressable style={styles.pressable}
          onPress={() => { 
          Linking.openURL(repository.url)
       }}>
        <Text style={styles.text}>Open in GitHub</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default RepositoryInfo;
