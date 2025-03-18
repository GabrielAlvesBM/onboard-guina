import { useState } from "react";
import Text from "../atm.typography";
import CreateBoardModalForm from "../mol.create-bord-modal-form";
import { SignalAdd } from "../icons/signal";

const CreateBoardFrame = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  return (
    <>
      <article
        className="flex items-center justify-center w-full max-w-[250px] h-[250px] border border-light rounded-sm cursor-pointer"
        onClick={() => {
          setIsCreateModalOpen(true);
        }}
      >
        <Text variant="link" className="flex flex-col items-center gap-2xs">
          <SignalAdd />
          Criar Projeto
        </Text>
      </article>

      <CreateBoardModalForm
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />
    </>
  );
};

export default CreateBoardFrame;
