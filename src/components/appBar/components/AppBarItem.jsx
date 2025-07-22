import { Pressable, Text } from 'react-native';

const AppBarItem = () => {
  return (
    <Pressable onPress={() => {
      console.log('Repositories');
    }}>
      <Text>Repositories</Text>
    </Pressable>
  );
};

export default AppBarItem;