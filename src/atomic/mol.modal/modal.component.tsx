import { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { CloseOutline } from "../icons/close";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {createPortal(
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-2x-dark/50"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-[450px] py-md px-xs m-2xs rounded-lg bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="absolute top-xs right-xs w-fit cursor-pointer"
              onClick={onClose}
            >
              <CloseOutline />
            </button>

            {children}
          </div>
        </div>,
        document.getElementById("modal-root") as HTMLElement
      )}
    </>
  );
};

export default Modal;
