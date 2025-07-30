import { gql } from "@apollo/client";

const RepositoryListItemFragment = gql`
  fragment RepositoryListItemFragment on Repository {
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
    reviews {
      edges {
        node {
          id
          text
          rating
          createdAt
          user {
            id
            username
          }
        }
      }
    }
  }
`;

export default RepositoryListItemFragment;
