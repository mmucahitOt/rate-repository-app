import { gql } from "@apollo/client";
import { RepositoriesResultFragment } from "../fragments";

const getRepositoriesQuery = gql`
  ${RepositoriesResultFragment}
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
  ) {
    repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
      ...RepositoriesResultFragment
    }
  }
`;

export default getRepositoriesQuery;
