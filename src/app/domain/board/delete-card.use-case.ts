import { useMutation } from "@apollo/client";
import {
  DeleteCardMutation,
  DeleteCardMutationVariables,
  DeleteCardDocument,
} from "@/app/data/graphql/generated";

interface UseDeleteCardProps {
  onCompleted?: (data?: DeleteCardMutation) => void;
  onError?: (error: Error) => void;
}

export const useDeleteCard = ({ onCompleted, onError }: UseDeleteCardProps) => {
  const [deleteCardMutation, { loading }] = useMutation(DeleteCardDocument, {
    onCompleted,
    onError,
  });

  const deleteCard = (variables: DeleteCardMutationVariables) => {
    deleteCardMutation({ variables: variables });
  };

  return {
    deleteCard,
    loading,
  };
};
