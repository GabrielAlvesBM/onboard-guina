import { useMutation } from "@apollo/client";
import {
  UpdateCardOrderMutation,
  UpdateCardOrderMutationVariables,
  UpdateCardOrderDocument,
} from "@/app/data/graphql/generated";

interface UseUpdateCardOrderProps {
  onCompleted?: (data?: UpdateCardOrderMutation) => void;
  onError?: (error: Error) => void;
}

export const useUpdateCardOrder = ({
  onCompleted,
  onError,
}: UseUpdateCardOrderProps) => {
  const [updateCardOrderMutation, { loading }] = useMutation(
    UpdateCardOrderDocument,
    {
      onCompleted,
      onError,
    },
  );

  const updateCardOrder = (variables: UpdateCardOrderMutationVariables) => {
    updateCardOrderMutation({ variables: variables });
  };

  return {
    updateCardOrder,
    loading,
  };
};
