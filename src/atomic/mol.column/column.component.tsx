import { FC } from "react";
import { columnVariants } from "./column.style";
import Text from "../atm.typography";
import Button from "../atm.button";
import { SignalMore, SignalAdd } from "../icons/signal";
import * as columnStrings from "./column.strings";
import { CardColumns } from "../shared/types";

interface ColumnProps {
  CardColumn: CardColumns;
}

const Column: FC<ColumnProps> = ({ CardColumn }) => {
  return (
    <>
      <div className="flex flex-col justify-between gap-sm min-w-[330px] h-[660px] p-sm bg-white">
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

        <div className="h-full p-xs rounded-sm shadow-inner bg-x-light"></div>

        <Button variant="link" className="flex gap-2xs mx-auto">
          <SignalAdd /> {columnStrings.ADD_TASK}
        </Button>
      </div>
    </>
  );
};

export default Column;
