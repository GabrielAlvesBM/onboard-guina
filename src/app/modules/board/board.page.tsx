import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Text from "@/atomic/atm.typography";
import Column from "@/atomic/mol.column";
import Card from "@/atomic/mol.card";
import { useQueryBoard } from "@/app/domain/board/query-board.use-case";
import { Card as CardType, CardColumns } from "@/app/data/graphql/generated";
import Skeleton from "@/atomic/atm.skeleton";
import {
  DndContext,
  DragOverlay,
  DragStartEvent,
  DragEndEvent,
} from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

const columns: CardColumns[] = Object.values(CardColumns);

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();

  const { boardData, loading } = useQueryBoard({
    variables: { boardId: boardId || "" },
  });

  const [cards, setCards] = useState(boardData?.board.cards || []);
  const [activeCard, setActiveCard] = useState<CardType | null>(null);

  useEffect(() => {
    setCards(boardData?.board.cards || []);
  }, [boardData]);

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    const currentCard = cards.find((card) => card.id === active.id) as CardType;

    setActiveCard(currentCard);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setActiveCard(null);
    if (!over || !activeCard) return;

    const destinationColumn: CardColumns = over.data.current?.column || over.id;

    const newIndex = getNewIndex(destinationColumn, over);

    if (activeCard.column === destinationColumn) {
      moveToSameColumn(destinationColumn, newIndex);
    } else {
      moveToDifferentColumn(destinationColumn, newIndex);
    }
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
    }
  };

  const moveToDifferentColumn = (
    destinationColumn: CardColumns,
    newIndex: number,
  ) => {
    if (!activeCard) return;

    const updatedCard = {
      ...activeCard,
      column: destinationColumn,
    };
    const filteredCards = cards.filter((card) => card.id !== activeCard.id);
    const newColumnCards = filteredCards.filter(
      (card) => card.column === destinationColumn,
    );

    newColumnCards.splice(newIndex, 0, updatedCard);

    const newCards = [
      ...filteredCards.filter((card) => card.column !== destinationColumn),
      ...newColumnCards,
    ];
    setCards(newCards);
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
