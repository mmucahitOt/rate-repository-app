import { gql } from "@apollo/client";
import RepositoryListItemFragment from "./repositoriesListItem";

const RepositoriesResultFragment = gql`
  ${RepositoryListItemFragment}
  fragment RepositoriesResultFragment on RepositoryConnection {
    edges {
      node {
        ...RepositoryListItemFragment
      }
    }
  }
`;

export default RepositoriesResultFragment;
