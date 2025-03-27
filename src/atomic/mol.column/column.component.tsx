import { FC } from "react";
import { columnVariants } from "./column.style";
import Text from "../atm.typography";
import Button from "../atm.button";
import Card from "../mol.card";
import { SignalMore, SignalAdd } from "../icons/signal";
import * as columnStrings from "./column.strings";
import { CardColumns } from "../shared/types";
import { Card as CardType } from "@/app/data/graphql/generated";

interface ColumnProps {
  CardColumn: CardColumns;
  cards?: CardType[];
}

const Column: FC<ColumnProps> = ({ CardColumn, cards }) => {
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

        <div className="flex flex-col gap-2xs h-full p-xs rounded-sm shadow-inner overflow-y-auto bg-x-light">
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>

        <Button variant="link" className="flex gap-2xs mx-auto">
          <SignalAdd /> {columnStrings.ADD_TASK}
        </Button>
      </div>
    </>
  );
};

export default Column;
