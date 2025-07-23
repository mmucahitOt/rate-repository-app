import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../configs/theme';
import AppBarItem from './components/AppBarItem';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  scrollView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        <AppBarItem label="Sign In" path="/sign-in" />
        <AppBarItem label="Repositories" path="/repositories" />
      </ScrollView>
    </View>
  );
};

export default AppBar;