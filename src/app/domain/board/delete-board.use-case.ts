import { useMutation } from "@apollo/client";
import {
  DeleteBoardMutation,
  DeleteBoardMutationVariables,
  DeleteBoardDocument,
} from "@/app/data/graphql/generated";

interface UseDeleteBoardProps {
  onCompleted?: (data?: DeleteBoardMutation) => void;
  onError?: (error: Error) => void;
}

export const useDeleteBoard = ({
  onCompleted,
  onError,
}: UseDeleteBoardProps) => {
  const [deleteBoardMutation, { loading }] = useMutation(DeleteBoardDocument, {
    onCompleted,
    onError,
  });

  const deleteBoard = (variables: DeleteBoardMutationVariables) => {
    deleteBoardMutation({ variables: variables });
  };

  return {
    deleteBoard,
    loading,
  };
};
