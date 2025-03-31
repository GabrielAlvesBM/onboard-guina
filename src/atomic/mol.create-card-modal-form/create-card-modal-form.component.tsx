import { FC } from "react";
import { TextFormFields } from "../mol.input-fields";
import Modal from "../mol.modal";
import Form from "../org.form";
import { createCardModalFormStrings } from "./create-card-modal-form.strings";
import { useCreateCard } from "@/app/domain/board/create-card.use-case";
import { CardColumns } from "@/app/data/graphql/generated";
import { createCardSchema, CreateCardData } from "../org.form/form.schemas";
import { toast } from "sonner";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  boardId: string;
  column: CardColumns;
  refetch: () => void;
}

const CreateCardModalForm: FC<ModalProps> = ({
  isOpen,
  onClose,
  boardId,
  column,
  refetch,
}) => {
  const { createCard, loading } = useCreateCard({
    onCompleted() {
      refetch();
      onClose();
      toast.success(createCardModalFormStrings.MESSAGES.CREATE_CARD_SUCCESS);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleSubmit = (data: CreateCardData) => {
    createCard({
      data: {
        name: data.name,
        boardId,
        column,
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form
        onSubmit={handleSubmit}
        schema={createCardSchema}
        buttonDisabled={loading}
        buttonLabel={
          loading
            ? createCardModalFormStrings.BUTTON_LABELS.LOADING
            : createCardModalFormStrings.BUTTON_LABELS.CREATE_CARD
        }
      >
        <TextFormFields fields={createCardModalFormStrings.TEXT_FIELDS} />
      </Form>
    </Modal>
  );
};

export default CreateCardModalForm;
