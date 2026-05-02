import React from "react";
import styles from "./formList.module.css";

type FormListProps = {
  clickCancelar?: () => void;
  onSubmit?: (data: { title: string; description: string }) => void;
};

function FormList({clickCancelar}: FormListProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  return (
    <>
      <h2>Criar Lista</h2>

      <form className={styles.bodyForm}>
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
