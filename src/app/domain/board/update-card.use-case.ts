import { useMutation } from "@apollo/client";
import {
  UpdateCardMutation,
  UpdateCardMutationVariables,
  UpdateCardDocument,
} from "@/app/data/graphql/generated";

interface UseUpdateCardProps {
  onCompleted?: (data?: UpdateCardMutation) => void;
  onError?: (error: Error) => void;
}

export const useUpdateCard = ({ onCompleted, onError }: UseUpdateCardProps) => {
  const [updateCardMutation, { loading }] = useMutation(UpdateCardDocument, {
    onCompleted,
    onError,
  });

  const updateCard = (variables: UpdateCardMutationVariables) => {
    updateCardMutation({ variables: variables });
  };

  return {
    updateCard,
    loading,
  };
};
