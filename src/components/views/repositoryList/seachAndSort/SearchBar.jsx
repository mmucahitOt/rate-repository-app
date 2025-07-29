import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import theme from '../../../../configs/theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  searchbar: {
    elevation: 2,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
});

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleClear = () => {
    setSearchQuery('');
  };

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search repositories..."
        onChangeText={handleSearch}
        onClearIconPress={handleClear}
        value={searchQuery}
        style={styles.searchbar}
        iconColor={theme.colors.primary}
        inputStyle={{
          color: theme.colors.textPrimary,
          fontSize: theme.fontSizes.body,
          fontFamily: theme.fonts.main,
        }}
        placeholderTextColor={theme.colors.textSecondary}
        searchAccessibilityLabel="Search repositories"
        clearAccessibilityLabel="Clear search"
        testID="repository-search-bar"
      />
    </View>
  );
};

export default SearchBar;