import { View } from 'react-native';
import Body from './body/Body';
import AppBar from './appBar/AppBar';
import { StyleSheet } from 'react-native';
import theme from '../configs/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
  <View style={styles.container}>
    <AppBar />
    <Body />
  </View>);
};

export default Main;