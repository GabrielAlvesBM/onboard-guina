import { FC } from "react";
import { TextFormFields } from "../mol.input-fields";
import Modal from "../mol.modal";
import Form from "../org.form";
import * as editBoardModalFormStrings from "./edit-board-modal-form.strings";
import { editBoardSchema, EditBoardData } from "../org.form/form.schemas";

interface EditBoardModalProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}

const EditBoardModalForm: FC<EditBoardModalProps> = ({
  isOpen,
  onClose,
  id,
}) => {
  const handleSubmit = (data: EditBoardData) => {
    console.log(data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form
        onSubmit={handleSubmit}
        schema={editBoardSchema}
        buttonLabel={editBoardModalFormStrings.BUTTON_LABEL_EDIT_BOARD}
      >
        <TextFormFields
          fields={[
            {
              name: "id",
              type: "hidden",
              defaultValue: id,
            },
          ]}
        />
        <TextFormFields fields={editBoardModalFormStrings.TEXT_FIELDS} />
      </Form>
    </Modal>
  );
};

export default EditBoardModalForm;
