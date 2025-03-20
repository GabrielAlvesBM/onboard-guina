import { useMutation } from "@apollo/client";
import {
  EditBoardMutation,
  EditBoardMutationVariables,
  EditBoardDocument,
} from "@/app/data/graphql/generated";

interface UseEditBoardProps {
  onCompleted?: (data?: EditBoardMutation) => void;
  onError?: (error: Error) => void;
}

export const useEditBoard = ({ onCompleted, onError }: UseEditBoardProps) => {
  const [editBoardMutation, { loading }] = useMutation(EditBoardDocument, {
    onCompleted,
    onError,
  });

  const editBoard = (variables: EditBoardMutationVariables) => {
    editBoardMutation({ variables: variables });
  };

  return {
    editBoard,
    loading,
  };
};
