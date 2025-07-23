import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../configs/theme';
import AppBarItem from './components/AppBarItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarItem label="Sign In" path="/sign-in" />
     <AppBarItem label="Repositories" path="/repositories" />
    </View>
  );
};

export default AppBar;