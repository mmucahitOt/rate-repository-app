import { useQuery } from '@apollo/client';
import { getRepositoriesQuery } from '../../../graphql';
import { useEffect, useState } from 'react';
import Text from '../../common/Text';
import RepositoryListContainer from './repositoryListContainer';
import { OrderBy, OrderDirection } from '../../../graphql/enums';

const RepositoryList = () => {
  const [order, setOrder] = useState({ orderBy: OrderBy.CREATED_AT, orderDirection: OrderDirection.DESC });

  const [repositories, setRepositories] = useState([]);
  const { data, loading, error, refetch } = useQuery(getRepositoriesQuery, {
    fetchPolicy: 'cache-and-network',
    variables: {
      orderBy: order.orderBy,
      orderDirection: order.orderDirection,
    },
  });
  
  useEffect(() => {
    if (data) {
      setRepositories(data.repositories?.edges.map(edge => edge.node));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, [order, order.orderBy, order.orderDirection]);

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <Text>Error loading repositories</Text>;
  }

  const onOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  return (
    <RepositoryListContainer repositories={repositories} onOrderChange={onOrderChange} order={order} />
  );
};

export default RepositoryList;