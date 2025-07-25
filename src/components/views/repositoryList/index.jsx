import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './repositoryItem';
import { useQuery } from '@apollo/client';
import { getRepositoriesQuery } from '../../../graphql';
import { useEffect, useState } from 'react';
import Text from '../../common/Text';
import RepositoryListContainer from './repositoryListContainer';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  const { data, loading, error } = useQuery(getRepositoriesQuery, {
    fetchPolicy: 'cache-and-network',
  });
  
  useEffect(() => {
    if (data) {
      setRepositories(data.repositories?.edges.map(edge => edge.node));
    }
  }, [data]);

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <Text>Error loading repositories</Text>;
  }

  return (
    <RepositoryListContainer repositories={repositories} />
  );
};

export default RepositoryList;