import { View } from "react-native";
import SortMenu from "./SortMenu";
import SearchBar from "./SearchBar";

const SearchAndSort = (
  {
    order,
    onOrderChange,
    searchQuery,
    setSearchQuery,
  }
) => {
  return (
    <View style={{ flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <SortMenu order={order} onOrderChange={onOrderChange} />
    </View>
  );
};

export default SearchAndSort;