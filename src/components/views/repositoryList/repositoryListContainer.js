import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./repositoryItem";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (
        <RepositoryItem
          id={item.id}
          ownerAvatarUrl={item.ownerAvatarUrl}
          fullName={item.fullName}
          description={item.description}
          language={item.language}
          forksCount={item.forksCount}
          stargazersCount={item.stargazersCount}
          ratingAverage={item.ratingAverage}
          reviewCount={item.reviewCount}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryListContainer;
