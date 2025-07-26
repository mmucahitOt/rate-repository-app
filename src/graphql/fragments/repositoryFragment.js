import { gql } from "@apollo/client";

const RepositoryFragment = gql`
  fragment RepositoryFragment on Repository {
    id
    url
    ownerAvatarUrl
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
  }
`;

export default RepositoryFragment;
