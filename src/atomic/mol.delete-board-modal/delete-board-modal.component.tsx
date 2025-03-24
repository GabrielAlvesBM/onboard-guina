import { FC } from "react";
import Text from "../atm.typography";
import Button from "../atm.button";
import Modal from "../mol.modal";
import { deleteBoardModalStrings } from "./delete-board-modal.strings";
import { useDeleteBoard } from "@/app/domain/board/delete-board.use-case";
import { toast } from "sonner";

interface DeleteBoardModalProps {
  id: string;
  refetch: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const DeleteBoardModal: FC<DeleteBoardModalProps> = ({
  id,
  isOpen,
  onClose,
  refetch,
}) => {
  const { deleteBoard, loading } = useDeleteBoard({
    onCompleted() {
      toast.success(deleteBoardModalStrings.DELETE_SUCCESS);
      refetch();
      onClose();
    },
    onError(error) {
      toast.error(deleteBoardModalStrings.DELETE_ERROR, {
        description: error.message,
      });
    },
  });

  const handleDeleteBoard = () => {
    deleteBoard({ boardId: id });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Text variant="body1" className="mb-sm">
        {deleteBoardModalStrings.CONFIRM_DESCRIPTION}
      </Text>

      <div className="flex justify-center gap-xs">
        <Button variant="secondary" onClick={onClose}>
          {deleteBoardModalStrings.CANCEL}
        </Button>

        <Button
          variant="primaryDestructive"
          disabled={loading}
          onClick={handleDeleteBoard}
        >
          {loading
            ? deleteBoardModalStrings.LOADING
            : deleteBoardModalStrings.DELETE_BUTTON}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteBoardModal;
