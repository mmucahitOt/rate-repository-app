import { gql } from "@apollo/client";
import { RepositoriesResultFragment } from "../fragments";

const getRepositoriesQuery = gql`
  ${RepositoriesResultFragment}
  query {
    ...RepositoriesResultFragment
  }
`;

export default getRepositoriesQuery;
