import { View } from 'react-native';
import { Route, Routes } from 'react-router-native';
import AppBar from './appBar';
import { StyleSheet } from 'react-native';
import theme from '../configs/theme';
import RepositoryList from './views/repositoryList';
import SignIn from './views/sign-in';
import RepositoryDetail from './views/repositoryDetail';
import ReviewCreate from './views/reviewCreate';
import SignUp from './views/sign-up';
import UserReviewList from './views/userReviewList';

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
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/repositories" element={<RepositoryList />} />
        <Route path="/repositories/:id" element={<RepositoryDetail />} />
        <Route path="/review-create" element={<ReviewCreate />} />
        <Route path="/user-review-list" element={<UserReviewList />} />
    </Routes>
  </View>);
};

export default Main;