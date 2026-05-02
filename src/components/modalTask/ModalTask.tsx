import { useState, useRef, type MouseEvent } from "react";
import styles from "./modalTask.module.css";
import React from "react";

type ModalTaskProps = {
  isOpen: boolean;
  onClose?: () => void;
};

type Filter = "todas" | "pendente" | "andamento" | "concluida";

function ModalTask({ isOpen, onClose }: ModalTaskProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<Filter>("pendente");
  const [date, setDate] = useState("");
  const Modal = useRef<HTMLDivElement>(null);

  const clickOut = (e: MouseEvent) => {
    if (e.target instanceof Node && !Modal.current.contains(e.target)) {
      onClose();
    }
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (
      value === "todas" ||
      value === "pendente" ||
      value === "andamento" ||
      value === "concluida"
    ) {
      setStatus(value);
    }
  };

  const onDataChange = (e: React.ChangeEvent<HTMLDataElement>) => {
    const value = e.target.value;
    setDate(value);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalBg} onClick={clickOut}>
      <div className={styles.modal} ref={Modal}>
        
      </div>
    </div>
  );
}

export default ModalTask;
