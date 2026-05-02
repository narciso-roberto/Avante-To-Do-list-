import style from "./listCard.module.css";
import Button from "@components/button/Button";
import React from "react";
import List from "./List";
import ListContext from "../../../../context/useContext";
import GenericModal from "@components/genericModal/GenericModal";
import FormList from "./formList/FormList";

function ListCard() {
  const [isOpen, setOpen] = React.useState(false);

  const { AllLists, setEspecificList } = React.useContext(ListContext);

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

  return (
    <section className={style.card}>
      <div className={style.list}>
        <h1>Listas</h1>
        <Button text="+ Nova Lista" action={openMenu} />
      </div>

      <div className={style.listList}>
        {AllLists.map(({ id, title, description, data }, idx) => (
          <List
            key={idx}
            id={id}
            title={title}
            description={description}
            data={data}
            onclick={onclick}
          />
        ))}
      </div>

      {/* <Modal isOpen={isOpen} onClose={closeMenu} onSubmit={onSubmitList} /> */}

      <GenericModal isOpen={isOpen} onClose={closeMenu}>
        <FormList clickCancelar={closeMenu} />
      </GenericModal>
    </section>
  );
}

export default ListCard;
