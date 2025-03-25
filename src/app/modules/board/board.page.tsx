import { useParams } from "react-router-dom";
import Text from "@/atomic/atm.typography";
import Column from "@/atomic/mol.column";
import { useQueryBoard } from "@/app/domain/board/query-board.use-case";

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();

  const { boardData } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  return (
    <div>
      <Text variant="h1" className="my-md text-left">
        {boardData?.board.name}
      </Text>

      <div className="flex gap-sm overflow-x-auto">
        <Column CardColumn="TO_DO" />
        <Column CardColumn="IN_PROGRESS" />
        <Column CardColumn="IN_REVIEW" />
        <Column CardColumn="DONE" />
      </div>
    </div>
  );
};

export default BoardPage;
