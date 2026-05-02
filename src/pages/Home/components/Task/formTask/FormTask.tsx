import React from "react";
import styles from "./formTask.module.css";

type Filter = "todas" | "pendente" | "andamento" | "concluida";

type FormTaskProps = {
  clickCancelar?: () => void;
  onSubmit?: (data: { title: string; description: string }) => void;
};

function FormTask({ clickCancelar }: FormTaskProps) {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [status, setStatus] = React.useState<Filter>("pendente");
  const [date, setDate] = React.useState("");

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

  return (
    <>
      <h2>Criar Tarefa</h2>

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

        <select
          className={styles.selectLabel}
          value={status}
          onChange={onSelectChange}
        >
          <option value="pendente">Pendente</option>
          <option value="andamento">Em andamento</option>
          <option value="concluida">Concluída</option>
        </select>

        <input
          className={styles.data}
          type="date"
          name="createdAt"
          value={date}
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
            Criar
          </button>
        </div>
      </form>
    </>
  );
}

export default FormTask;
