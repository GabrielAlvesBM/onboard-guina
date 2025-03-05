import { useMutation } from "@apollo/client";
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/app/data/graphql/generated";

interface UseLoginProps {
  onCompleted?: (data?: LoginMutation) => void;
  onError?: (error: Error) => void;
}

export const useLogin = ({ onCompleted, onError }: UseLoginProps) => {
  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted,
    onError,
  });

  const login = (variables: LoginMutationVariables) => {
    loginMutation({ variables: variables });
  };

  return {
    login,
    loading,
  };
};
