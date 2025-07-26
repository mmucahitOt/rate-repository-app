import { gql } from "@apollo/client";
import RepositoryFragment from "./repositoryFragment";

const RepositoriesResultFragment = gql`
  ${RepositoryFragment}
  fragment RepositoriesResultFragment on Query {
    repositories {
      edges {
        node {
          ...RepositoryFragment
        }
      }
    }
  }
`;

export default RepositoriesResultFragment;
