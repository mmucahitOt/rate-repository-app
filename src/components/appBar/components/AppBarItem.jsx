  import { Pressable, StyleSheet } from 'react-native';
import { useNavigate } from 'react-router-native';
import theme from '../../../configs/theme';
import { View } from 'react-native';
import Text from '../../common/Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: theme.colors.secondary,
    borderRadius: 5,
    height: 40,
  },
});

const AppBarItem = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(path)}>
      <View style={styles.container}>
        <Text>{label}</Text>
        </View>
    </Pressable>
  );
};

export default AppBarItem;