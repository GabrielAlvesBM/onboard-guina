import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Text from "@/atomic/atm.typography";
import Skeleton from "@/atomic/atm.skeleton";
import Column from "@/atomic/mol.column";
import Card from "@/atomic/mol.card";
import { useQueryBoard } from "@/app/domain/board/query-board.use-case";
import { useUpdateCard } from "@/app/domain/board/update-card.use-case";
import { useUpdateCardOrder } from "@/app/domain/board/update-card-order.use-case";
import { Card as CardType, CardColumns } from "@/app/data/graphql/generated";
import { toast } from "sonner";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const columns: CardColumns[] = [
  CardColumns.ToDo,
  CardColumns.InProgress,
  CardColumns.InReview,
  CardColumns.Done,
];

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();

  const { boardData, loading, refetch } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  const [cards, setCards] = useState(boardData?.board.cards || []);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  useEffect(() => {
    setCards(boardData?.board.cards || []);
  }, [boardData?.board.cards]);

  const { updateCard } = useUpdateCard({
    onError(error) {
      toast.error(error.message);
    },
  });
  const { updateCardOrder } = useUpdateCardOrder({
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const currentCard = cards.find((card) => card.id === active.id) as CardType;

    setActiveCard(currentCard);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    if (!over || !activeCard) return;

    const destinationColumn: CardColumns = over.data.current?.column || over.id;

    if (activeCard.column === destinationColumn) {
      const newIndex = getNewIndex(destinationColumn, over);

      moveToSameColumn(destinationColumn, newIndex);
    } else {
      moveToDifferentColumn(destinationColumn);
    }

    setActiveCard(null);
  };

  const getNewIndex = (
    destinationColumn: CardColumns,
    over: DragEndEvent["over"],
  ): number => {
    const thisColumnCards = cards.filter(
      (card) => card.column === destinationColumn,
    );

    if (over?.data.current?.sortable) {
      return thisColumnCards.findIndex((card) => card.id === over.id);
    }

    return thisColumnCards.length;
  };

  const moveToSameColumn = (
    destinationColumn: CardColumns,
    newIndex: number,
  ) => {
    if (!activeCard) return;

    const thisColumnCards = cards.filter(
      (card) => card.column === destinationColumn,
    );
    const oldIndex = thisColumnCards.findIndex(
      (card) => card.id === activeCard.id,
    );

    if (oldIndex !== newIndex) {
      const newColumnCards = arrayMove(thisColumnCards, oldIndex, newIndex);
      const newCards = [
        ...cards.filter((card) => card.column !== destinationColumn),
        ...newColumnCards,
      ];

      setCards(newCards);

      updateCardOrder({
        data: newColumnCards.map((card, index) => ({
          id: card.id,
          order: index,
        })),
      });
    }
  };

  const moveToDifferentColumn = (destinationColumn: CardColumns) => {
    if (!activeCard) return;

    const updatedCard = {
      ...activeCard,
      column: destinationColumn,
    };

    const filteredCards = cards.filter((card) => card.id !== activeCard.id);
    const newColumnCards = filteredCards.filter(
      (card) => card.column === destinationColumn,
    );

    newColumnCards.unshift(updatedCard);

    const newCards = [
      ...cards.filter((card) => card.column !== destinationColumn),
      ...newColumnCards,
    ];

    setCards(newCards);

    updateCard({
      data: {
        id: activeCard.id,
        name: activeCard.name,
        column: destinationColumn,
      },
    });

    updateCardOrder({ data: { id: updatedCard.id, order: 0 } });
  };

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

          <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
            <div className="flex gap-sm h-full overflow-x-auto">
              {columns.map((column) => (
                <Column
                  key={column}
                  CardColumn={column}
                  cards={cards.filter((card) => card.column === column)}
                  boardId={boardData!.board.id}
                  refetch={refetch}
                />
              ))}
            </div>

            <DragOverlay>
              {activeCard ? <Card card={activeCard} /> : null}
            </DragOverlay>
          </DndContext>
        </>
      )}
    </>
  );
};

export default BoardPage;
