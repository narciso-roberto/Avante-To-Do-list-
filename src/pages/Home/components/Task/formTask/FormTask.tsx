import React from "react";
import styles from "./formTask.module.css";
import type TaskAdapter from "../types/TaskAdapter";
import { toast } from "react-toastify";

type Status = "pendente" | "andamento" | "concluida";

type FormTaskProps = {
  clickCancelar?: () => void;
  onSubmit?: (e: React.SubmitEvent, data: TaskAdapter) => void;
  listId: number;
};

function FormTask({ clickCancelar, onSubmit, listId }: FormTaskProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState<Status>("pendente");
  const [finishedAt, setFinishedAt] = React.useState("");

  const task: TaskAdapter = {
    title,
    description,
    createdAt: new Date(),
    finishedAt: new Date(finishedAt),
    status,
    listId,
  };

  const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (
      value === "pendente" ||
      value === "andamento" ||
      value === "concluida"
    ) {
      setStatus(value);
    }
  };

  const onDataChange = (e: React.ChangeEvent<HTMLDataElement>) => {
    const value = e.target.value;
    setFinishedAt(value);
  };

  const checkTaskForm = () => {
    let valid: boolean = true;
    if (!title || title.trim().length <= 0) {
      toast.error("Título deve ter pelo menos 1 caracteres");
      valid = false;
    }

    if (!description || description.trim().length <= 0) {
      toast.error("Descrição deve ter pelo menos 1 caracteres");
      valid = false;
    }

    const date = new Date(finishedAt);
    const now = new Date();
    if (!finishedAt || isNaN(date.getTime()) || date < now) {
      toast.error("Data inválida ou no passado");
      valid = false;
    }

    return valid;
  };

  return (
    <>
      <form
        className={styles.bodyForm}
        onSubmit={(e: React.SubmitEvent) => {
          e.preventDefault();
          if (checkTaskForm()) {
            onSubmit(e, task);
          }
        }}
      >
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.modalInput}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={styles.modalTextarea}
        />

        <select
          className={styles.selectLabel}
          value={status}
          onChange={onSelectChange}
        >
          <option value="pendente">Pendente</option>
          <option value="andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </select>

        <label htmlFor="createdAt">Data de conclusao</label>
        <input
          className={styles.data}
          type="date"
          name="createdAt"
          value={finishedAt}
          onChange={onDataChange}
        />

        <div className={styles.modalActions}>
          <button
            type="button"
            onClick={clickCancelar}
            className={styles.modalCancel}
          >
            Cancelar
          </button>
          <button type="submit" className={styles.modalSubmit}>
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTask;
