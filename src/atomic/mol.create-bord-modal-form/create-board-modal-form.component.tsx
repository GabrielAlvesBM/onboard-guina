import { FC, useState } from "react";
import Caption from "../atm.caption";
import { TextFormFields } from "../mol.input-fields";
import Modal from "../mol.modal";
import Form from "../org.form";
import { createBoardModalFormStrings } from "./create-board-modal-form.strings";
import { useCreateBoard } from "@/app/domain/board/create-board.use-case";
import { createBoardSchema, CreateBoardData } from "../org.form/form.schemas";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateBoardModalForm: FC<ModalProps> = ({ isOpen, onClose }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const { createBoard, loading } = useCreateBoard({
    onCompleted() {
      window.location.reload();
    },
    onError(error) {
      setErrorMsg(error.message);
    },
  });

  const handleSubmit = (data: CreateBoardData) => {
    createBoard({
      data: { name: data.name },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form
        onSubmit={handleSubmit}
        schema={createBoardSchema}
        buttonDisabled={loading}
        buttonLabel={
          loading
            ? createBoardModalFormStrings.BUTTON_LABELS.LOADING
            : createBoardModalFormStrings.BUTTON_LABELS.CREATE_BOARD
        }
      >
        <TextFormFields fields={createBoardModalFormStrings.TEXT_FIELDS} />

        {errorMsg ? <Caption status="error">{errorMsg}</Caption> : undefined}
      </Form>
    </Modal>
  );
};

export default CreateBoardModalForm;
