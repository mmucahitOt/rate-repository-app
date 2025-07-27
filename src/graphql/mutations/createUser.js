import { gql } from "@apollo/client";

const createUser = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      id
      username
    }
  }
`;

export default createUser;
