import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Text from "../atm.typography";
import EditBoardModalForm from "../mol.edit-board-modal-form";
import DeleteBoardModal from "../mol.delete-board-modal";
import { EditOutline } from "../icons/edit";
import { DeleteOutline } from "../icons/delete";

interface BoardFrameProps {
  board: {
    id: string;
    name: string;
  };
  refetch: () => void;
}

const BoardFrame: FC<BoardFrameProps> = ({ board, refetch }) => {
  const navigate = useNavigate();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [ísDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <article
        className="relative flex flex-col gap-sm w-full max-w-[250px] border border-light rounded-sm overflow-hidden cursor-pointer"
        onClick={() => navigate(`/board/${board.id}`)}
      >
        <img
          src="/board-placeholder-image.png"
          alt={board.name}
          className="w-full h-full max-h-[125px] object-cover"
        />

        <div className="flex flex-col gap-2xs mx-sm mb-lg text-left">
          <Text variant="h3">{board.name}</Text>
          <Text variant="body1">Criado em xx/xx/xxxx</Text>
        </div>

        <div className="absolute flex gap-3xs bottom-2xs right-2xs">
          <span
            onClick={(event) => {
              event.stopPropagation();
              setIsEditModalOpen(true);
            }}
          >
            <EditOutline />
          </span>

          <span
            onClick={(event) => {
              event.stopPropagation();
              setIsDeleteModalOpen(true);
            }}
          >
            <DeleteOutline />
          </span>
        </div>
      </article>

      <EditBoardModalForm
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        defaultValues={board}
      />

      <DeleteBoardModal
        isOpen={ísDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        id={board.id}
        refetch={refetch}
      />
    </>
  );
};

export default BoardFrame;
