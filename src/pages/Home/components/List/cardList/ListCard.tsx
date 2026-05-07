import style from "./listCard.module.css";
import Button from "@components/button/Button";
import React from "react";
import List from "../list/List";
import ListContext from "../../../../../context/useContext";
import GenericModal from "@components/genericModal/GenericModal";
import FormList from "../formList/FormList";
import type ListAdapter from "../types/ListAdapter";

function ListCard() {
  const [isOpen, setOpen] = React.useState(false);

  const { AllLists, setAllLists, setEspecificList } =
    React.useContext(ListContext);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const onclick = (e: React.MouseEvent) => {
    const target = e.currentTarget;

    if (target instanceof Node) {
      const unique = AllLists.filter(
        (lista) => String(lista.id) == target.getAttribute("id")
      )[0];
      setEspecificList(unique);
    }
  };

  const onSubmit = async (e: React.SubmitEvent, novaLista: ListAdapter) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/lista/postLista", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaLista),
      });

      const { data } = await response.json();

      if (!response.ok) {
        throw new Error("Erro ao cadastrar lista");
      }

      setAllLists((prevLists) => [...prevLists, data]);

      closeMenu();
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <section className={style.card}>
      <div className={style.list}>
        <h1>Listas</h1>
        <Button text="+ Nova Lista" action={openMenu} />
      </div>

      <div className={style.listList}>
        {AllLists &&
          AllLists.map(({ id, title, description, createdAt }, idx) => (
            <List
              key={idx}
              id={id}
              title={title}
              description={description}
              createdAt={createdAt}
              onclick={onclick}
            />
          ))}
      </div>

      <GenericModal isOpen={isOpen} onClose={closeMenu}>
        <FormList clickCancelar={closeMenu} onSubmit={onSubmit} />
      </GenericModal>
    </section>
  );
}

export default ListCard;
