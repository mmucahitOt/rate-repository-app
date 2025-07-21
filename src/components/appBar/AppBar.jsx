import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../configs/theme';
import AppBarItem from './components/AppBarItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <AppBarItem />
  </View>;
};

export default AppBar;