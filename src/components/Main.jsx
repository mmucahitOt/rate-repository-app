import { View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import AppBar from './appBar';
import { StyleSheet } from 'react-native';
import theme from '../configs/theme';
import RepositoryList from './views/repositoryList';
import SignIn from './views/sign-in';
import RepositoryDetail from './views/repositoryDetail';
import ReviewCreate from './views/reviewCreate';
import { AuthStorageContext } from '../contexts/AuthStorageContext';
import { useContext } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  const { isAuthenticated } = useContext(AuthStorageContext);

  if (!isAuthenticated) {
    return <SignIn />;
  }

  return (
  <View style={styles.container}>
    <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<RepositoryDetail />} />
        <Route path="/review-create" element={<ReviewCreate />} />
    </Routes>
  </View>);
};

export default Main;