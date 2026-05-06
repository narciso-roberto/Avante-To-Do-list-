import React from "react";
import styles from "./formList.module.css";
import type ListAdapter from "../types/ListAdapter";
import { toast } from "react-toastify";

type FormListProps = {
  clickCancelar?: () => void;
  onSubmit?: (
    e: React.SubmitEvent,
    data: ListAdapter,
    id: number
  ) => Promise<void>;
  id?: number;
  listBase?: ListAdapter;
};

function FormList({ clickCancelar, onSubmit, id, listBase }: FormListProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const list: ListAdapter = {
    title,
    description,
    createdAt: new Date(),
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

    return valid;
  };

  React.useEffect(() => {
    if (listBase) {
      setTitle(listBase.title ?? "");
      setDescription(listBase.description ?? "");
    }
  }, [listBase]);

  return (
    <>
      <h2>Criar Lista</h2>

      <form
        className={styles.bodyForm}
        onSubmit={(e: React.SubmitEvent) => {
          e.preventDefault();
          if (checkTaskForm()) {
            onSubmit(e, list, id);
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

        <div className={styles.modalActions}>
          <button
            type="button"
            className={styles.modalCancel}
            onClick={clickCancelar}
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

export default FormList;
