import { gql } from "@apollo/client";

const signInMutation = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        id
        username
        createdAt
        reviewCount
      }
    }
  }
`;

export default signInMutation;
