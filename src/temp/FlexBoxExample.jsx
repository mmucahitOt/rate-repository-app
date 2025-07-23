import { View, StyleSheet } from 'react-native';
import Text from '../components/common/Text';

const styles = StyleSheet.create({
  outerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#eee',
    height: 300,
  },
  leftColumn: {
    backgroundColor: 'lightblue',
    padding: 10,
    flex: 1,
    marginRight: 10,
  },
  rightColumn: {
    backgroundColor: 'lightgreen',
    flex: 2,
    padding: 10,
    // This will be a flex container for its children
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  rightItem: {
    backgroundColor: 'white',
    marginVertical: 5,
    padding: 10,
  },
});

export default function FlexboxExample() {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.leftColumn}>
        <Text>Left Column</Text>
      </View>
      <View style={styles.rightColumn}>
        <View style={styles.rightItem}><Text>Right Item 1</Text></View>
        <View style={styles.rightItem}><Text>Right Item 2</Text></View>
        <View style={styles.rightItem}><Text>Right Item 3</Text></View>
      </View>
    </View>
  );
}