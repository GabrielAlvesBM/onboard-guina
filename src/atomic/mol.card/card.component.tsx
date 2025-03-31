import { FC } from "react";
import Text from "../atm.typography";
import { InfoOutline } from "../icons/info";
import { EditOutline } from "../icons/edit";
import { Card as CardType, CardColumns } from "@/app/data/graphql/generated";
import { useUserStore } from "@/app/stores/user.store";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface CardProps {
  card: CardType;
  column?: CardColumns;
}

const Card: FC<CardProps> = ({ card, column }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: card.id,
    data: { column },
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const { name } = useUserStore();
  const date = new Date(card.createdAt).toLocaleDateString("pt-br");

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex flex-col gap-xs p-xs text-left rounded-md cursor-pointer bg-white"
    >
      <div className="flex flex-col gap-2xs">
        <Text variant="h4">{card.name}</Text>
        <Text variant="body1" className="flex items-center gap-3xs">
          <img src="/avatar1.png" alt="Avatar 1" className="w-xs" /> {name}
        </Text>
      </div>

      <div className="flex gap-xs justify-between">
        <Text
          variant="body2"
          className="flex items-center gap-3xs whitespace-nowrap"
        >
          <EditOutline size={16} /> 0 Comentários
        </Text>

        <Text variant="body2" className="flex items-center gap-3xs">
          <InfoOutline size={16} /> {date}
        </Text>
      </div>
    </div>
  );
};

export default Card;
