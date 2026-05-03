import React from "react";
import styles from "./Task.module.css";
import GenericModal from "@components/genericModal/GenericModal";
import FormTask from "./formTask/FormTask";
import type TaskAdapter from "./types/TaskAdapter";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: string;
  finishedAt: string;
  listId: number;
  openEdit?: () => void;
  onDelete?: () => void;
};

function Task({
  id,
  title,
  description,
  createdAt,
  status,
  finishedAt,
  listId,
}: TaskProps) {
  const [openEdit, setOpenEdit] = React.useState(false);

  const onOpenEdit = () => {
    setOpenEdit(true);
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const onSubmit = (e: React.SubmitEvent, novaTarefa: TaskAdapter) => {
    e.preventDefault();
    console.log("taefa atualizada");
    console.log(novaTarefa);
    onCloseEdit();
  };

  return (
    <div className={styles.card} id={String(id)}>
      <div className={styles.left}>
        <span className={styles.arrow}>›</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}{" "}
          <span className={`${styles.statusBase} ${styles[status]}`}>
            {status}
          </span>
        </h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>
          Criada em {createdAt}, Prazo ate {finishedAt}
        </span>
      </div>

      <div className={styles.actions}>
        <button className={styles.edit} onClick={onOpenEdit}>
          ✏️
        </button>
        <button className={styles.delete}>🗑️</button>
      </div>

      <GenericModal isOpen={openEdit} onClose={onCloseEdit}>
        <h1>Editar Tarefa</h1>
        <FormTask
          clickCancelar={onCloseEdit}
          onSubmit={onSubmit}
          listId={listId}
        />
      </GenericModal>
    </div>
  );
}

export default Task;
