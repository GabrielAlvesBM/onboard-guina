import { useQuery } from "@apollo/client";
import {
  ListBoardsDocument,
  ListBoardsQuery,
  ListBoardsQueryVariables,
} from "@/app/data/graphql/generated";

interface UseListBoardsProps {
  variables: ListBoardsQueryVariables;
  onCompleted?: (data?: ListBoardsQuery) => void;
  onError?: (error: Error) => void;
}

export const useListBoards = ({
  variables,
  onCompleted,
  onError,
}: UseListBoardsProps) => {
  const { data, loading } = useQuery(ListBoardsDocument, {
    variables: variables,
    onCompleted,
    onError,
  });

  return {
    boardsData: data,
    loading,
  };
};
