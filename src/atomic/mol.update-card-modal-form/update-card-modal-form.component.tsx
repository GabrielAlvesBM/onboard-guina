import { FC } from "react";
import { TextFormFields } from "../mol.input-fields";
import Modal from "../mol.modal";
import Form from "../org.form";
import { updateCardModalFormStrings } from "./update-card-modal-form.strings";
import { updateCardSchema, UpdateCardData } from "../org.form/form.schemas";
import { useUpdateCard } from "@/app/domain/board/update-card.use-case";
import { toast } from "sonner";

interface UpdateCardModalProps {
  defaultValues: UpdateCardData;
  isOpen: boolean;
  onClose: () => void;
}

const UpdateCardModalForm: FC<UpdateCardModalProps> = ({
  isOpen,
  onClose,
  defaultValues,
}) => {
  const { updateCard, loading } = useUpdateCard({
    onCompleted() {
      onClose();
      toast.success(updateCardModalFormStrings.MESSAGES.UPDATE_SUCCESS);
    },
    onError(error) {
      toast.error(error.message);
    },
  });

  const handleSubmit = (data: UpdateCardData) => {
    updateCard({ data });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form
        onSubmit={handleSubmit}
        schema={updateCardSchema}
        buttonDisabled={loading}
        buttonLabel={
          loading
            ? updateCardModalFormStrings.BUTTON_LABELS.LOADING
            : updateCardModalFormStrings.BUTTON_LABELS.UPDATE_CARD
        }
      >
        <TextFormFields
          fields={[
            {
              name: "id",
              type: "hidden",
              defaultValue: defaultValues.id,
            },
            {
              name: "name",
              label: "Nome",
              type: "text",
              placeholder: "Nome da tarefa",
              defaultValue: defaultValues.name,
            },
          ]}
        />
      </Form>
    </Modal>
  );
};

export default UpdateCardModalForm;
