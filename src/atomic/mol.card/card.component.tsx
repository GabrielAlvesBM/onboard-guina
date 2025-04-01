import { FC, useState } from "react";
import Text from "../atm.typography";
import UpdateCardModalForm from "../mol.update-card-modal-form";
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
  const { name } = useUserStore();
  const date = new Date(card.createdAt).toLocaleDateString("pt-br");
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

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

  return (
    <>
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
            <span
              onPointerDown={(event) => {
                event.stopPropagation();
                setIsOpenUpdateModal(true);
              }}
            >
              <EditOutline size={16} />
            </span>{" "}
            0 Comentários
          </Text>

          <Text variant="body2" className="flex items-center gap-3xs">
            <InfoOutline size={16} /> {date}
          </Text>
        </div>
      </div>

      <UpdateCardModalForm
        isOpen={isOpenUpdateModal}
        onClose={() => setIsOpenUpdateModal(false)}
        defaultValues={card}
      />
    </>
  );
};

export default Card;
