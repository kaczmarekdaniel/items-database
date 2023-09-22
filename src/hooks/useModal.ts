import { useState } from "react";

export interface ModalState {
  isOpen: boolean;
  closeModal: () => void;
  openModal: () => void;
}

const useModal = (): ModalState => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return {
    isOpen,
    closeModal,
    openModal,
  };
};

export default useModal;
