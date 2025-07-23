  import { Pressable, Text } from 'react-native';
import { useNavigate } from 'react-router-native';


const AppBarItem = ({ label, path }) => {
  const navigate = useNavigate();

  return (
    <Pressable onPress={() => navigate(path)}>
      <Text>{label}</Text>
    </Pressable>
  );
};

export default AppBarItem;