import styles from "./list.module.css";
import React from "react";
import FormList from "../formList/FormList";
import GenericModal from "@components/genericModal/GenericModal";
import formatDate from "../../../../../util/dataFormat";
import ListContext from "../../../../../context/useContext";
import type ListAdapter from "../types/ListAdapter";
import Button from "@components/button/Button";

type ListProps = {
  id: number;
  title: string;
  description: string;
  createdAt: Date;

  onclick?: (e: React.MouseEvent) => void;
};

function List({ id, title, description, createdAt, onclick }: ListProps) {
  const [openEdit, setOpenEdit] = React.useState(false);
  const [modalDelete, setModalDelete] = React.useState(false);

  const { setAllLists, setEspecificList } = React.useContext(ListContext);

  const taskBase: ListAdapter = {
    title,
    description,
    createdAt,
  };

  const onCloseDelete = () => {
    setModalDelete(false);
  };

  const onOpenEdit = () => {
    setOpenEdit(true);
  };

  const onCloseEdit = () => {
    setOpenEdit(false);
  };

  const onDelete = async (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/lista/deleteLista/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    if (response.ok) {
      setAllLists((list) => [...list.filter((list) => list.id != id)]);
      setEspecificList(null);
    }
  };

  const onEdit = async (
    e: React.SubmitEvent,
    novaLista: ListAdapter,
    id: number
  ) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3000/lista/putLista/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaLista),
    });

    const { data } = await response.json();

    if (response.ok) {
      setAllLists((arrayList) =>
        arrayList.map((list) => (list.id == id ? data : list))
      );
    }
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
        <span className={styles.date}>Criada em {formatDate(createdAt)}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.edit} onClick={onOpenEdit}>
          ✏️
        </button>
        <button
          className={styles.delete}
          onClick={() => {
            setModalDelete(true);
          }}
        >
          🗑️
        </button>
      </div>

      <GenericModal isOpen={openEdit} onClose={onCloseEdit}>
        <FormList
          clickCancelar={onCloseEdit}
          onSubmit={onEdit}
          id={id}
          listBase={taskBase}
        />
      </GenericModal>

      <GenericModal isOpen={modalDelete} onClose={onCloseDelete}>
        <h2 className={styles.alert}>
          Essa ação deletará todas as tarefas da lista
        </h2>
        <Button
          text="Tem certeza ?"
          action={(e: React.MouseEvent) => {
            onDelete(e, id);
          }}
        />
      </GenericModal>
    </div>
  );
}

export default List;
