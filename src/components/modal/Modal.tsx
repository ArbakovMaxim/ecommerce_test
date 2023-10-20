import React from "react";
import Modal, { Styles } from "react-modal";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  contentLabel: string;
  children?: React.ReactNode;
  style?: Styles;
}

const PokemonModal: React.FC<ModalProps> = ({
  isOpen,
  onRequestClose,
  contentLabel,
  children,
  style,
}) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel={contentLabel}
    style={style}
  >
    {children}
  </Modal>
);

export default PokemonModal;
