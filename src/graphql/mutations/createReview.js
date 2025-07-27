import { gql } from "@apollo/client";

const createReview = gql`
  mutation CreateReview($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      repositoryId
    }
  }
`;

export default createReview;
