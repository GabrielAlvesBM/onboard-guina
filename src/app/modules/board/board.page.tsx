import { useParams } from "react-router-dom";
import Text from "@/atomic/atm.typography";
import Column from "@/atomic/mol.column";
import { useQueryBoard } from "@/app/domain/board/query-board.use-case";
import { CardColumns } from "@/atomic/shared/types";

const columns: CardColumns[] = ["TO_DO", "IN_PROGRESS", "IN_REVIEW", "DONE"];

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();

  const { boardData } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  const cards = boardData?.board.cards;

  return (
    <>
      <Text variant="h1" className="my-md text-left">
        {boardData?.board.name}
      </Text>

      <div className="flex gap-sm overflow-x-auto">
        {columns.map((column) => (
          <Column
            key={column}
            CardColumn={column}
            cards={cards?.filter((card) => card.column === column)}
          />
        ))}
      </div>
    </>
  );
};

export default BoardPage;
