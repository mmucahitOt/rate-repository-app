import { FlatList, StyleSheet, View } from "react-native";
import RepositoryInfo from "./RepositoryInfo";
import ReviewItem from "./ReviewItem";
import { useParams } from "react-router-native";
import { useQuery } from "@apollo/client";
import { getRepositoryQuery } from "../../../graphql/queries";
import Text from "../../common/Text";
import { useEffect } from "react";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

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
    <FlatList
      data={data.repository.reviews.edges.map(edge => edge.node)}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => <RepositoryInfo repository={data.repository} />}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

export default RepositoryDetail;