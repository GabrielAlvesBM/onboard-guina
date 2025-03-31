import { useQuery } from "@apollo/client";
import {
  QueryBoardDocument,
  QueryBoardQuery,
  QueryBoardQueryVariables,
} from "@/app/data/graphql/generated";

interface UseQueryBoardProps {
  variables: QueryBoardQueryVariables;
  onCompleted?: (data?: QueryBoardQuery) => void;
  onError?: (error: Error) => void;
}

export const useQueryBoard = ({
  variables,
  onCompleted,
  onError,
}: UseQueryBoardProps) => {
  const { data, loading, refetch } = useQuery(QueryBoardDocument, {
    variables: variables,
    onCompleted,
    onError,
  });

  return {
    boardData: data,
    loading,
    refetch,
  };
};
