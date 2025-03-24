import { useState } from "react";
import Text from "../atm.typography";
import Button from "../atm.button";
import CreateBoardModalForm from "../mol.create-bord-modal-form";
import { PlaceholderDefault } from "../icons/placeholder";
import { noProjectMessageStrings } from "./empty-project-message.strings";

const EmptyProjectMessage = () => {
  const [isCreateBoardModalOpen, setIsCreateBoardModalOpen] = useState(false);

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

      <CreateBoardModalForm
        isOpen={isCreateBoardModalOpen}
        onClose={() => setIsCreateBoardModalOpen(false)}
      />
    </>
  );
};

export default EmptyProjectMessage;
