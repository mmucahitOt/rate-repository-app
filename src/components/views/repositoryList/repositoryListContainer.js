import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./repositoryItem";
import SearchBar from "./seachAndSort/SearchBar";
import SortMenu from "./seachAndSort/SortMenu";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  searchAndSortContainer: {
    backgroundColor: "#ffffff",
    borderBottomWidth: 1,
    borderBottomColor: "#e1e4e8",
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({
  repositories,
  onOrderChange,
  order,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={repositories}
        ListHeaderComponent={
          <View style={styles.searchAndSortContainer}>
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <SortMenu order={order} onOrderChange={onOrderChange} />
          </View>
        }
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
    </View>
  );
};

export default RepositoryListContainer;
