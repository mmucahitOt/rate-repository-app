import { gql } from "@apollo/client";

const getRepositoryQuery = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
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
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            user {
              id
              username
              createdAt
              reviews {
                totalCount
              }
              reviewCount
            }
            userId
            repositoryId
            rating
            createdAt
            text
          }
        }
      }
    }
  }
`;

export default getRepositoryQuery;
