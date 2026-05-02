import React from "react";
import styles from "./genericModal.module.css";

type GenericModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};

function GenericModal({ isOpen, onClose, children }: GenericModalProps) {
  isOpen;
  onClose;

  const Modal = React.useRef<HTMLDivElement>(null);

  const clickOut = (e: React.MouseEvent) => {
    if (e.target instanceof Node && !Modal.current.contains(e.target)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBg} onClick={clickOut}>
      <div className={styles.modal} ref={Modal}>
        {children}
      </div>
    </div>
  );
}

export default GenericModal;
