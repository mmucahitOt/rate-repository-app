import { useQuery, useApolloClient } from '@apollo/client';
import { getRepositoriesQuery } from '../../../graphql';
import { useEffect, useState } from 'react';
import Text from '../../common/Text';
import RepositoryListContainer from './repositoryListContainer';
import { OrderBy, OrderDirection } from '../../../graphql/enums';
import { useDebounce } from 'use-debounce';

const RepositoryList = () => {
  const client = useApolloClient();

  const [order, setOrder] = useState({ orderBy: OrderBy.CREATED_AT, orderDirection: OrderDirection.DESC });
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearchQuery] = useDebounce(searchQuery, 500);

  const { data, loading, error, refetch, fetchMore } = useQuery(getRepositoriesQuery, {
    variables: {
      orderBy: order.orderBy,
      orderDirection: order.orderDirection,
      first: 3,
    },
  });
  
  useEffect(() => {
    const variables = {
      orderBy: order.orderBy,
      orderDirection: order.orderDirection,
      first: 3,
    };
    if (debouncedSearchQuery && debouncedSearchQuery.trim() !== '') {
      variables.searchKeyword = debouncedSearchQuery;
    }
    refetch(variables);
  }, [order, order.orderBy, order.orderDirection, debouncedSearchQuery]);

  // Debug: Log cache contents
  useEffect(() => {
    if (data) {
      console.log('Apollo Cache Contents:');
      console.log('Repositories in cache:', client.cache.extract());
      console.log('Current query data:', data);
    }
  }, [data, client.cache]);

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        first: 3,
        after: data.repositories.pageInfo.endCursor,
        orderBy: order.orderBy,
        orderDirection: order.orderDirection,
        searchKeyword: debouncedSearchQuery,
      },
    });
  };

  const onEndReach = () => {
    handleFetchMore();
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
      onEndReach={onEndReach}
      repositories={data?.repositories?.edges.map(edge => edge.node) || []} 
      onOrderChange={onOrderChange} 
      order={order}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
    />
  );
};

export default RepositoryList;