import { gql } from "@apollo/client";

export default gql`
  query {
    me {
      reviews {
        edges {
          node {
            id
            user {
              id
              username
            }
            repository {
              id
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
