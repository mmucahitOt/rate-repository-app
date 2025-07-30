import { useQuery } from '@apollo/client';
import { getRepositoriesSimpleQuery, getRepositoriesQuery } from '../../../graphql';
import { useEffect, useState } from 'react';
import Text from '../../common/Text';
import RepositoryListContainer from './repositoryListContainer';
import { OrderBy, OrderDirection } from '../../../graphql/enums';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {

  const [order, setOrder] = useState({ orderBy: OrderBy.CREATED_AT, orderDirection: OrderDirection.DESC });
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const [repositories, setRepositories] = useState([]);
  const { data, loading, error, refetch, fetchMore } = useQuery(getRepositoriesSimpleQuery, {
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
    const variables = {
      orderBy: order.orderBy,
      orderDirection: order.orderDirection,
    };
    if (debouncedSearchQuery && debouncedSearchQuery.trim() !== '') {
      variables.searchKeyword = debouncedSearchQuery;
    }
    refetch(variables);
  }, [order, order.orderBy, order.orderDirection, debouncedSearchQuery]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      query: getRepositoriesQuery,
      variables: {
        first: 10,
        after: data.repositories.pageInfo.endCursor,
        orderBy: order.orderBy,
        orderDirection: order.orderDirection,
      },
    });
  };

  if (loading) return <Text>Loading...</Text>;

  if (error) {
    console.log(JSON.stringify(error, null, 2));
    return <Text>Error loading repositories</Text>;
  }

  const onOrderChange = (selectedOrder) => {
    setOrder(selectedOrder);
  };

  return (
    <RepositoryListContainer 
      repositories={repositories} 
      onOrderChange={onOrderChange} 
      order={order}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default RepositoryList;