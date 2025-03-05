import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($data: LoginInput!) {
    login(data: $data) {
      token
    }
  }
`;
