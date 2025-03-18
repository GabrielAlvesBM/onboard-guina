import { FC } from "react";
import Text from "../atm.typography";

interface BoardFrameProps {
  title: string;
}

const BoardFrame: FC<BoardFrameProps> = ({ title }) => {
  return (
    <article className="flex flex-col gap-sm w-full max-w-[250px] border border-light rounded-sm overflow-hidden">
      <img
        src="/board-placeholder-image.png"
        alt={title}
        className="w-full h-full max-h-[125px] object-cover"
      />

      <div className="flex flex-col gap-2xs mx-sm mb-lg text-left">
        <Text variant="h3">{title}</Text>
        <Text variant="body1">Criado em xx/xx/xxxx</Text>
      </div>
    </article>
  );
};

export default BoardFrame;
