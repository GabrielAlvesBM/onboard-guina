import { FC, useState } from "react";
import Text from "../atm.typography";
import EditBoardModalForm from "../mol.edit-board-modal-form";
import { EditOutline } from "../icons/edit";

interface BoardFrameProps {
  board: {
    id: string;
    name: string;
  };
}

const BoardFrame: FC<BoardFrameProps> = ({ board }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  return (
    <>
      <article className="relative flex flex-col gap-sm w-full max-w-[250px] border border-light rounded-sm overflow-hidden cursor-pointer">
        <img
          src="/board-placeholder-image.png"
          alt={board.name}
          className="w-full h-full max-h-[125px] object-cover"
        />

        <div className="flex flex-col gap-2xs mx-sm mb-lg text-left">
          <Text variant="h3">{board.name}</Text>
          <Text variant="body1">Criado em xx/xx/xxxx</Text>
        </div>

        <div className="absolute bottom-2xs right-2xs">
          <span onClick={openEditModal}>
            <EditOutline />
          </span>
        </div>
      </article>

      <EditBoardModalForm
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        defaultValues={board}
      />
    </>
  );
};

export default BoardFrame;
