import { gql } from "@apollo/client";
import RepositoryFragment from "../fragments/repositoryFragment";

const getRepositoryQuery = gql`
  ${RepositoryFragment}
  query Repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryFragment
    }
  }
`;

export default getRepositoryQuery;
