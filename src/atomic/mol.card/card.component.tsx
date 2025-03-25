import { FC } from "react";
import Text from "../atm.typography";
import { InfoOutline16 } from "../icons/info";
import { EditOutline16 } from "../icons/edit";
import { Card as CardType } from "@/app/data/graphql/generated";
import { useUserStore } from "@/app/stores/user.store";

interface CardProps {
  card?: CardType;
}

const Card: FC<CardProps> = ({ card }) => {
  const { name } = useUserStore();
  const date = new Date(card?.createdAt).toLocaleDateString("pt-br");

  return (
    <div className="flex flex-col gap-xs p-xs text-left rounded-md cursor-pointer bg-white">
      <div className="flex flex-col gap-2xs">
        <Text variant="h4">{card?.name}</Text>

        <Text variant="body1" className="flex items-center gap-3xs">
          <img src="/avatar1.png" alt={"Avatar 1"} className="w-xs" /> {name}
        </Text>
      </div>

      <div className="flex gap-xs justify-between">
        <Text
          variant="body2"
          className="flex items-center gap-3xs whitespace-nowrap"
        >
          <EditOutline16 /> 0 Comentários
        </Text>

        <Text variant="body2" className="flex items-center gap-3xs">
          <InfoOutline16 /> {date}
        </Text>
      </div>
    </div>
  );
};

export default Card;
