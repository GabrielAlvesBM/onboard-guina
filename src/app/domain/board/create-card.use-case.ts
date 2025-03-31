import { useMutation } from "@apollo/client";
import {
  CreateCardMutation,
  CreateCardMutationVariables,
  CreateCardDocument,
} from "@/app/data/graphql/generated";

interface UseCreateCardProps {
  onCompleted?: (data?: CreateCardMutation) => void;
  onError?: (error: Error) => void;
}

export const useCreateCard = ({ onCompleted, onError }: UseCreateCardProps) => {
  const [createCardMutation, { loading }] = useMutation(CreateCardDocument, {
    onCompleted,
    onError,
  });

  const createCard = (variables: CreateCardMutationVariables) => {
    createCardMutation({ variables: variables });
  };

  return {
    createCard,
    loading,
  };
};
