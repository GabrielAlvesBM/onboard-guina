import { useMutation } from "@apollo/client";
import {
  LoginDocument,
  LoginMutation,
  LoginMutationVariables,
} from "@/app/data/graphql/generated";
import { useAuthStore } from "@/app/stores/auth.store";
import { useUserStore } from "@/app/stores/user.store";

interface UseLoginProps {
  onCompleted?: (data?: LoginMutation) => void;
  onError?: (error: Error) => void;
}

export const useLogin = ({ onCompleted, onError }: UseLoginProps) => {
  const { setAuth } = useAuthStore();
  const { setUser } = useUserStore();

  const handleCompleted = (data?: LoginMutation) => {
    if (!data?.login) {
      return;
    }

    const { token, user } = data.login;

    setAuth(token);
    setUser({ id: user.id, name: user.name });

    if (onCompleted) {
      onCompleted(data);
    }
  };

  const [loginMutation, { loading }] = useMutation(LoginDocument, {
    onCompleted: handleCompleted,
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
