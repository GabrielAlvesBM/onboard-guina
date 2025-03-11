import { useMutation } from "@apollo/client";
import {
  CreateUserMutation,
  CreateUserMutationVariables,
  CreateUserDocument,
} from "@/app/data/graphql/generated";
import { useAuthStore } from "@/app/stores/auth.store";
import { useUserStore } from "@/app/stores/user.store";

interface UseRegisterProps {
  onCompleted?: (data?: CreateUserMutation) => void;
  onError?: (error: Error) => void;
}

export const useRegister = ({ onCompleted, onError }: UseRegisterProps) => {
  const { setAuth } = useAuthStore();
  const { setUser } = useUserStore();

  const handleCompleted = (data: CreateUserMutation) => {
    const { token, user } = data.createUser;

    setAuth(token);
    setUser({ id: user.id, name: user.name });

    onCompleted?.(data);
  };

  const [registerMutation, { loading }] = useMutation(CreateUserDocument, {
    onCompleted: handleCompleted,
    onError,
  });

  const register = (variables: CreateUserMutationVariables) => {
    registerMutation({ variables: variables });
  };

  return {
    register,
    loading,
  };
};
