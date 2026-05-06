import React from "react";
import styles from "./Task.module.css";
import GenericModal from "@components/genericModal/GenericModal";
import FormTask from "../formTask/FormTask";
import type TaskAdapter from "../types/TaskAdapter";
import formatDate from "../../../../../util/dataFormat";
import ListContext from "../../../../../context/useContext";
import { type Status } from "../types/TaskAdapter";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  status: Status;
  finishedAt: Date;
  listId: number;
  onEdit?: (
    e: React.SubmitEvent,
    novaTask: TaskAdapter,
    id: number
  ) => Promise<void>;
  onDelete?: (e: React.MouseEvent, id: number) => Promise<void>;
};

function Task({
  id,
  title,
  description,
  createdAt,
  status,
  finishedAt,
  listId,
  onDelete,
}: TaskProps) {
  const [openEdit, setOpenEdit] = React.useState(false);

  const { setEspecificList } = React.useContext(ListContext);

  const taskBase: TaskAdapter = {
    title,
    description,
    createdAt,
    finishedAt,
    status,
    listId,
  };

  const onOpenEdit = () => {
    setOpenEdit(true);
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const onEdit = async (e: React.SubmitEvent, novaTarefa: TaskAdapter) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/tarefa/putTarefa/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTarefa),
      }
    );

    if (response.ok) {
      setEspecificList((prev) => ({
        ...prev,
        tasks: prev.tasks.map((task) =>
          task.id === id ? { ...task, ...novaTarefa } : task
        ),
      }));
    }
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
          Criada em {formatDate(createdAt)}, Prazo ate {formatDate(finishedAt)}
        </span>
      </div>

      <div className={styles.actions}>
        <button className={styles.edit} onClick={onOpenEdit}>
          ✏️
        </button>
        <button
          className={styles.delete}
          onClick={(e: React.MouseEvent) => {
            onDelete(e, id);
          }}
        >
          🗑️
        </button>
      </div>

      <GenericModal isOpen={openEdit} onClose={onCloseEdit}>
        <h1>Editar Tarefa</h1>
        <FormTask
          clickCancelar={onCloseEdit}
          onSubmit={onEdit}
          listId={listId}
          taskBase={taskBase}
        />
      </GenericModal>
    </div>
  );
}

export default Task;
