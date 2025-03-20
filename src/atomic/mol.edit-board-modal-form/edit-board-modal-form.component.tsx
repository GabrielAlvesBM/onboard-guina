import { FC, useState } from "react";
import Caption from "../atm.caption";
import { TextFormFields } from "../mol.input-fields";
import Modal from "../mol.modal";
import Form from "../org.form";
import * as editBoardModalFormStrings from "./edit-board-modal-form.strings";
import { editBoardSchema, EditBoardData } from "../org.form/form.schemas";
import { useEditBoard } from "@/app/domain/board/edit-board.use-case";

interface EditBoardModalProps {
  defaultValues: EditBoardData;
  isOpen: boolean;
  onClose: () => void;
}

const EditBoardModalForm: FC<EditBoardModalProps> = ({
  isOpen,
  onClose,
  defaultValues,
}) => {
  const [errorMsg, setErrorMsg] = useState("");

  const { editBoard, loading } = useEditBoard({
    onCompleted() {
      onClose();
    },
    onError(error) {
      setErrorMsg(error.message);
    },
  });

  const handleSubmit = (data: EditBoardData) => {
    editBoard({ data: data });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form
        onSubmit={handleSubmit}
        schema={editBoardSchema}
        buttonDisabled={loading}
        buttonLabel={
          loading
            ? editBoardModalFormStrings.BUTTON_LABEL_EDIT_BOARD_LOADING
            : editBoardModalFormStrings.BUTTON_LABEL_EDIT_BOARD
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
              placeholder: "Nome do projeto",
              defaultValue: defaultValues.name,
            },
          ]}
        />

        {errorMsg ? <Caption status="error">{errorMsg}</Caption> : undefined}
      </Form>
    </Modal>
  );
};

export default EditBoardModalForm;
