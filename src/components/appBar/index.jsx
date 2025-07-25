import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../configs/theme';
import AppBarItem from './components/AppBarItem';
import useAuthStorage from '../../hooks/useAuthStorage';
import Text from '../common/Text';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';

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
    justifyContent: 'flex-start',
  },
});

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const isAuthenticated = authStorage.isAuthenticated();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    await authStorage.removeAuth();
    apolloClient.resetStore();
    navigate('/sign-in');
  };

  return (
    <View>
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.scrollView}>
        {!isAuthenticated && <AppBarItem label="Sign In" path="/sign-in" />}
        {isAuthenticated && <AppBarItem label="Repositories" path="/repositories" />}
        </ScrollView>
        {isAuthenticated && <Pressable onPress={handleSignOut}><Text>Sign Out</Text></Pressable>}
      </View>
      </View>
  );
};

export default AppBar;