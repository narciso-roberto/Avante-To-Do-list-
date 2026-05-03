import React from "react";
import style from "./taskCard.module.css";
import ListContext from "../../../../context/useContext";
import Button from "@components/button/Button";
import GenericModal from "@components/genericModal/GenericModal";
import FormTask from "./formTask/FormTask";
import Task from "./Task";
import type TaskAdapter from "./types/TaskAdapter";

type Filter = "todas" | "pendente" | "andamento" | "concluida";

function TaskCard() {
  const { especificList } = React.useContext(ListContext);
  const [active, setActive] = React.useState<Filter>("todas");
  const [isOpen, setOpen] = React.useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const onSubmit = (e: React.SubmitEvent, novaLista: TaskAdapter) => {
      e.preventDefault();
      console.log(novaLista);
    };

  if (!especificList)
    return (
      <section className={style.card}>
        <div className={style.noneTask}>
          Selecione uma lista para ver suas tarefas
        </div>
      </section>
    );

  const { tasks } = especificList;

  return (
    <section className={style.card}>
      <div className={style.list}>
        <h1>Tarefas</h1>
        <Button text="+ Nova Tarefa" action={openMenu} />
      </div>

      <div className={style.labels}>
        <button
          className={active === "todas" ? style.active : undefined}
          onClick={() => setActive("todas")}
        >
          Todas
        </button>

        <button
          className={active === "pendente" ? style.active : undefined}
          onClick={() => setActive("pendente")}
        >
          Pendente
        </button>

        <button
          className={active === "andamento" ? style.active : undefined}
          onClick={() => setActive("andamento")}
        >
          Em Andamento
        </button>

        <button
          className={active === "concluida" ? style.active : undefined}
          onClick={() => setActive("concluida")}
        >
          Concluída
        </button>
      </div>

      <div className={style.listList}>
        {tasks
          .filter((task) => {
            if (active === "todas") return true;
            if (active === "pendente") return task.status === "pendente";
            if (active === "andamento") return task.status === "andamento";
            if (active === "concluida") return task.status === "concluida";
            return true;
          })
          .map(
            (
              { id, title, description, createdAt, status, finishedAt, listId },
              idx
            ) => (
              <Task
                key={id ?? idx}
                id={id}
                title={title}
                description={description}
                createdAt={createdAt}
                status={status}
                finishedAt={finishedAt}
                listId={listId}
              />
            )
          )}
      </div>

      <GenericModal isOpen={isOpen} onClose={closeMenu}>
        <h1>Cadastrar Tarefa</h1>
        <FormTask clickCancelar={closeMenu} onSubmit={onSubmit} listId={especificList.id}/>
      </GenericModal>
    </section>
  );
}

export default TaskCard;
