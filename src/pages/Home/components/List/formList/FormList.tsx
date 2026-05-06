import React from "react";
import styles from "./formList.module.css";
import type ListAdapter from "../types/ListAdapter";
import { toast } from "react-toastify";

type FormListProps = {
  clickCancelar?: () => void;
  onSubmit?: (e: React.SubmitEvent, data: ListAdapter) => void;
};

function FormList({ clickCancelar, onSubmit }: FormListProps) {
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
      toast("Título deve ter pelo menos 1 caracteres");
      valid = false;
    }

    if (!description || description.trim().length <= 0) {
      toast("Descrição deve ter pelo menos 1 caracteres");
      valid = false;
    }

    return valid;
  };

  return (
    <>
      <h2>Criar Lista</h2>

      <form
        className={styles.bodyForm}
        onSubmit={(e: React.SubmitEvent) => {
          e.preventDefault();
          if (checkTaskForm()) {
            onSubmit(e, list);
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
            Criar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormList;
