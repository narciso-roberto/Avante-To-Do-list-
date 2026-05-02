import { useState, useRef, type MouseEvent, type SubmitEvent } from "react";
import styles from "./modal.module.css";

type ModalListProps = {
  isOpen: boolean;
  onClose?: () => void;
  onSubmit?: (data: { title: string; description: string }) => void;
};

function ModalList({ isOpen, onClose, onSubmit }: ModalListProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const Modal = useRef<HTMLDivElement>(null);

  const clickOut = (e: MouseEvent) => {
    if (e.target instanceof Node && !Modal.current.contains(e.target)) {
      onClose();
    }
  };

  const handleSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBg} onClick={clickOut}>
      <div className={styles.modal} ref={Modal}>
        
      </div>
    </div>
  );
}

export default ModalList;
