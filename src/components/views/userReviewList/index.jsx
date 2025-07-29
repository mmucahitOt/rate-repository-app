import { FlatList, StyleSheet, View } from "react-native";
import { useQuery } from "@apollo/client";
import { getMeQuery } from "../../../graphql/queries";
import Text from "../../common/Text";
import { useEffect } from "react";
import ReviewItem from "../repositoryDetail/ReviewItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const UserReviewList = () => {
  const { data, loading, error } = useQuery(getMeQuery);

  useEffect(() => {
    console.log("data", JSON.stringify(data, null, 2));
  }, [data]);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={data.me.reviews.edges.map(edge => edge.node)}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default UserReviewList;