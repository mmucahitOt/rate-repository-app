import { gql } from "@apollo/client";
import { RepositoriesResultFragment } from "../fragments";

const getRepositoriesQuery = gql`
  ${RepositoriesResultFragment}
  query Repositories(
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      ...RepositoriesResultFragment
    }
  }
`;

export default getRepositoriesQuery;
