import { FC, useState } from "react";
import { columnVariants } from "./column.style";
import Text from "../atm.typography";
import Button from "../atm.button";
import Card from "../mol.card";
import CreateCardModalForm from "../mol.create-card-modal-form";
import { SignalMore, SignalAdd } from "../icons/signal";
import * as columnStrings from "./column.strings";
import { Card as CardType, CardColumns } from "@/app/data/graphql/generated";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

interface ColumnProps {
  CardColumn: CardColumns;
  cards?: CardType[];
  boardId: string;
}

const Column: FC<ColumnProps> = ({ CardColumn, cards = [], boardId }) => {
  const [isCreateCardModalOpen, setIsCreateCardModalOpen] = useState(false);

  const { setNodeRef } = useDroppable({
    id: CardColumn,
  });

  return (
    <>
      <div className="flex flex-col justify-between gap-sm min-w-[330px] h-full max-h-[1500px] p-sm rounded-lg bg-white">
        <div className="flex justify-between items-center">
          <Text
            variant="body1"
            className={columnVariants({ status: CardColumn })}
          >
            {columnStrings.CARD_COLUMNS[CardColumn]}
          </Text>
          <span>
            <SignalMore />
          </span>
        </div>

        <div
          ref={setNodeRef}
          className="flex flex-col gap-2xs h-full p-xs rounded-sm shadow-inner overflow-y-auto bg-x-light"
        >
          <SortableContext
            items={cards.map((card) => card.id)}
            strategy={verticalListSortingStrategy}
          >
            {cards.map((card) => (
              <Card key={card.id} card={card} column={CardColumn} />
            ))}
          </SortableContext>
        </div>

        <Button
          variant="link"
          className="flex gap-2xs mx-auto"
          onClick={() => setIsCreateCardModalOpen(true)}
        >
          <SignalAdd /> {columnStrings.ADD_CARD}
        </Button>
      </div>

      <CreateCardModalForm
        isOpen={isCreateCardModalOpen}
        onClose={() => setIsCreateCardModalOpen(false)}
        boardId={boardId}
        column={CardColumn}
      />
    </>
  );
};

export default Column;
