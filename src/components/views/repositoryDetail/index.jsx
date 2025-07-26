import { useQuery } from "@apollo/client";
import { Image, Linking, Pressable, StyleSheet, Text, View, Text as NativeText } from "react-native";
import { getRepositoryQuery } from "../../../graphql/queries";
import { useParams } from "react-router-native";
import { useEffect } from "react";
import theme from "../../../configs/theme";
import RepositoryStatistics from "../repositoryList/repositoryItem/RepositoryStatistics";


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

const RepositoryDetail = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(getRepositoryQuery, {
    variables: { id },
  });

  useEffect(() => {
    console.log("data", JSON.stringify(data, null, 2));
  }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
    <View style={styles.detailContainer}>
    <View testID={`repositoryItem-${id}`} style={styles.imageContainer}>
      <Image source={{ uri: data.repository.ownerAvatarUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text fontWeight="bold">{data.repository.fullName}</Text>
        <Text color="textSecondary" fontSize="caption">{data.repository.description}</Text>
        <View style={styles.languageContainer}>
          <NativeText style={styles.language}>{data.repository.language}</NativeText>
        </View>
      </View>
      </View>
      <RepositoryStatistics
        forksCount={data.repository.forksCount}
        stargazersCount={data.repository.stargazersCount}
        ratingAverage={data.repository.ratingAverage}
        reviewCount={data.repository.reviewCount}
        />
        <Pressable style={styles.pressable}
          onPress={() => { 
          Linking.openURL(data.repository.url)
       }}>
        <Text style={styles.text}>Open in GitHub</Text>
      </Pressable>
      </View>
    </View>
  );
};

export default RepositoryDetail;