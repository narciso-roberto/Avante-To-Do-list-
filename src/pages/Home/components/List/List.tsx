import styles from "./list.module.css";
import React from "react";
import type ListAdapter from "./types/ListAdapter";
import FormList from "./formList/FormList";
import GenericModal from "@components/genericModal/GenericModal";

type ListProps = {
  id: number;
  title: string;
  description: string;
  data: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onclick?: (e: React.MouseEvent) => void;
};

function List({ id, title, description, data, onclick }: ListProps) {
  const [openEdit, setOpenEdit] = React.useState(false);

  const onOpenEdit = () => {
    setOpenEdit(true);
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const onSubmit = (e: React.SubmitEvent, novaLista: ListAdapter) => {
    e.preventDefault();
    console.log("lista atualizada");
    console.log(novaLista);
    onCloseEdit();
  };
  return (
    <div className={styles.card} onClick={onclick} id={String(id)}>
      <div className={styles.left}>
        <span className={styles.arrow}>›</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>Criada em {data}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.edit} onClick={onOpenEdit}>
          ✏️
        </button>
        <button className={styles.delete}>🗑️</button>
      </div>

      <GenericModal isOpen={openEdit} onClose={onCloseEdit}>
        <h1>Editar Tarefa</h1>
        <FormList clickCancelar={onCloseEdit} onSubmit={onSubmit} />
      </GenericModal>
    </div>
  );
}

export default List;
