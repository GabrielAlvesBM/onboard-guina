import { useMutation } from "@apollo/client";
import {
  CreateBoardMutation,
  CreateBoardMutationVariables,
  CreateBoardDocument,
} from "@/app/data/graphql/generated";

interface UseCreateBoardProps {
  onCompleted?: (data?: CreateBoardMutation) => void;
  onError?: (error: Error) => void;
}

export const useCreateBoard = ({
  onCompleted,
  onError,
}: UseCreateBoardProps) => {
  const [createBoardMutation, { loading }] = useMutation(CreateBoardDocument, {
    onCompleted,
    onError,
  });

  const createBoard = (variables: CreateBoardMutationVariables) => {
    createBoardMutation({ variables: variables });
  };

  return {
    createBoard,
    loading,
  };
};
