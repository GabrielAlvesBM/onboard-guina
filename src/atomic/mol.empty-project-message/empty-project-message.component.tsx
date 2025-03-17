import { useState } from "react";
import Text from "../atm.typography";
import Button from "../atm.button";
import Caption from "../atm.caption";
import { TextFormFields } from "../mol.input-fields";
import Modal from "../mol.modal";
import Form from "../org.form";
import { PlaceholderDefault } from "../icons/placeholder";
import * as noProjectMessageStrings from "./empty-project-message.strings";
import { createBoardSchema, CreateBoardData } from "../org.form/form.schemas";
import { useCreateBoard } from "@/app/domain/board/create-board.use-case";

const EmptyProjectMessage = () => {
  const [isCreateBoardModalOpen, setIsCreateBoardModalOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const { createBoard, loading } = useCreateBoard({
    onCompleted() {
      setIsCreateBoardModalOpen(false);
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
    <>
      <div className="flex flex-col items-center gap-sm py-xl px-lg rounded-md bg-white">
        <PlaceholderDefault />

        <div className="flex flex-col gap-2xs">
          <Text variant="h3">{noProjectMessageStrings.NO_PROJECT}</Text>
          <Text variant="body1">{noProjectMessageStrings.NO_PROJECT_DESC}</Text>
        </div>

        <Button variant="cta" onClick={() => setIsCreateBoardModalOpen(true)}>
          {noProjectMessageStrings.CREATE_PROJECT}
        </Button>
      </div>

      <Modal
        isOpen={isCreateBoardModalOpen}
        onClose={() => setIsCreateBoardModalOpen(false)}
      >
        <Form
          onSubmit={handleSubmit}
          schema={createBoardSchema}
          buttonDisabled={loading}
          buttonLabel={
            loading
              ? noProjectMessageStrings.BUTTON_LABEL_CREATE_BOARD_LOADING
              : noProjectMessageStrings.BUTTON_LABEL_CREATE_BOARD
          }
        >
          <TextFormFields fields={noProjectMessageStrings.TEXT_FIELDS} />

          {errorMsg ? <Caption status="error">{errorMsg}</Caption> : undefined}
        </Form>
      </Modal>
    </>
  );
};

export default EmptyProjectMessage;
