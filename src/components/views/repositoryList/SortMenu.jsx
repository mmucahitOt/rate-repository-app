import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu, Button, Divider } from 'react-native-paper';
import { OrderBy, OrderDirection } from '../../../graphql/enums';
import theme from '../../../configs/theme';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  button: {
    marginBottom: 8,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.primary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  menuItem: {
    paddingVertical: 8,
  },
  menuItemText: {
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
  },
});

const SortMenu = ({ order, onOrderChange }) => {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  // Create a mapping of order options
  const orderOptions = [
    {
      key: 'latest',
      label: 'Latest repositories',
      value: {
        orderBy: OrderBy.CREATED_AT,
        orderDirection: OrderDirection.DESC,
      },
    },
    {
      key: 'highestRated',
      label: 'Highest rated repositories',
      value: {
        orderBy: OrderBy.RATING_AVERAGE,
        orderDirection: OrderDirection.DESC,
      },
    },
    {
      key: 'lowestRated',
      label: 'Lowest rated repositories',
      value: {
        orderBy: OrderBy.RATING_AVERAGE,
        orderDirection: OrderDirection.ASC,
      },
    },
  ];

  // Get current selection label
  const getCurrentLabel = () => {
    const currentOption = orderOptions.find(option => 
      option.value.orderBy === order.orderBy && 
      option.value.orderDirection === order.orderDirection
    );
    return currentOption ? currentOption.label : 'Sort by...';
  };

  const handleSelection = (option) => {
    onOrderChange(option.value);
    closeMenu();
  };

  return (
    <View style={styles.container}>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button
            mode="outlined"
            onPress={openMenu}
            style={styles.button}
            labelStyle={styles.buttonText}
            icon="sort"
            iconColor={theme.colors.primary}
          >
            {getCurrentLabel()}
          </Button>
        }
        contentStyle={{
          backgroundColor: '#ffffff',
          borderRadius: 8,
          elevation: 4,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        }}
      >
        {orderOptions.map((option, index) => (
          <React.Fragment key={option.key}>
            <Menu.Item
              onPress={() => handleSelection(option)}
              title={option.label}
              titleStyle={styles.menuItemText}
              style={styles.menuItem}
            />
            {index < orderOptions.length - 1 && (
              <Divider style={{ backgroundColor: theme.colors.background }} />
            )}
          </React.Fragment>
        ))}
      </Menu>
    </View>
  );
};

export default SortMenu;