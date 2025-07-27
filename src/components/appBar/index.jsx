import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../../configs/theme';
import AppBarItem from './components/AppBarItem';
import Text from '../common/Text';
import { useNavigate } from 'react-router-native';
import { useContext } from 'react';
import { AuthStorageContext } from '../../contexts/AuthStorageContext';

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
  const { isAuthenticated, authSignOut } = useContext(AuthStorageContext);
  const navigate = useNavigate();
  
  const handleSignOut = async () => {
    await authSignOut();
    navigate('/sign-in');
  };

  if (!isAuthenticated) {
    return undefined;
  }

    return (
      <View>
        <View style={styles.container}>
          <AppBarItem label="Repositories" path="/repositories" />
          <AppBarItem label="Create Review" path="/review-create" />
          <Pressable onPress={handleSignOut}><Text>Sign Out</Text></Pressable>
        </View>
      </View>
    )
};

export default AppBar;