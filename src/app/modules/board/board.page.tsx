import { useParams } from "react-router-dom";
import Text from "@/atomic/atm.typography";
import Column from "@/atomic/mol.column";
import { useQueryBoard } from "@/app/domain/board/query-board.use-case";
import { CardColumns } from "@/atomic/shared/types";
import Skeleton from "@/atomic/atm.skeleton";

const columns: CardColumns[] = ["TO_DO", "IN_PROGRESS", "IN_REVIEW", "DONE"];

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();

  const { boardData, loading } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  const cards = boardData?.board.cards;

  return (
    <>
      {loading ? (
        <>
          <Skeleton className="my-md w-xl h-md" />

          <div className="flex gap-sm">
            {columns.map((_, index) => (
              <div
                key={index}
                className="w-[330px] h-[660px] p-sm rounded-lg bg-white"
              >
                <Skeleton className="size-full" />
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <Text variant="h1" className="my-md text-left">
            {boardData?.board.name}
          </Text>

          <div className="flex gap-sm h-full overflow-x-auto">
            {columns.map((column) => (
              <Column
                key={column}
                CardColumn={column}
                cards={cards?.filter((card) => card.column === column)}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BoardPage;
