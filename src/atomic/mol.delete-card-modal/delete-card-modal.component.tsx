import { FC } from "react";
import Text from "../atm.typography";
import Button from "../atm.button";
import Modal from "../mol.modal";
import { deleteCardModalStrings } from "./delete-card-modal.strings";
import { useDeleteCard } from "@/app/domain/board/delete-card.use-case";
import { toast } from "sonner";

interface DeleteCardModalProps {
  id: string;
  refetch: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const DeleteCardModal: FC<DeleteCardModalProps> = ({
  id,
  isOpen,
  onClose,
  refetch,
}) => {
  const { deleteCard, loading } = useDeleteCard({
    onCompleted() {
      refetch();
      onClose();
      toast.success(deleteCardModalStrings.MESSAGES.DELETE_SUCCESS);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleDeleteCard = () => {
    deleteCard({ cardId: id });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Text variant="body1" className="mb-sm">
        {deleteCardModalStrings.CONFIRM_DESCRIPTION}
      </Text>

      <div className="flex justify-center gap-xs">
        <Button variant="secondary" onClick={onClose}>
          {deleteCardModalStrings.BUTTON_LABELS.CANCEL}
        </Button>

        <Button
          variant="primaryDestructive"
          disabled={loading}
          onClick={handleDeleteCard}
        >
          {loading
            ? deleteCardModalStrings.BUTTON_LABELS.LOADING
            : deleteCardModalStrings.BUTTON_LABELS.DELETE_BUTTON}
        </Button>
      </div>
    </Modal>
  );
};

export default DeleteCardModal;
