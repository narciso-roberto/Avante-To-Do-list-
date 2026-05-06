import React from "react";
import style from "./taskCard.module.css";
import ListContext from "../../../../../context/useContext";
import Button from "@components/button/Button";
import GenericModal from "@components/genericModal/GenericModal";
import FormTask from "../formTask/FormTask";
import Task from "../task/Task";
import type TaskAdapter from "../types/TaskAdapter";

type Filter = "todas" | "pendente" | "andamento" | "concluida";

function TaskCard() {
  const { especificList, setEspecificList } = React.useContext(ListContext);
  const [active, setActive] = React.useState<Filter>("todas");
  const [isOpen, setOpen] = React.useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  const onSubmit = async (e: React.SubmitEvent, novaTask: TaskAdapter) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/tarefa/postTarefa/${especificList.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTask),
      }
    );
    const { data } = await response.json();

    if (response.ok) {
      setEspecificList((prev) => ({
        ...prev,
        tasks: [...prev.tasks, data],
      }));
    }

    closeMenu();
  };

  const onDelete = async (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/tarefa/deleteTarefa/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    // const { data } = await response.json();

    if (response.ok) {
      setEspecificList((prev) => ({
        ...prev,
        tasks: [...prev.tasks.filter((task) => task.id != id)],
      }));
    }
  };

  const onEdit = async (
    e: React.MouseEvent,
    novaTask: TaskAdapter,
    id: number
  ) => {
    e.preventDefault();
    const response = await fetch(
      `http://localhost:3000/tarefa/putTarefa/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novaTask),
      }
    );
    // const { data } = await response.json();

    if (response.ok) {
      e;
      // setEspecificList((prev) => ({
      //   ...prev,
      //   tasks: [...prev.tasks.filter((task) => task.id != id)],
      // }));
    }
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
                onDelete={onDelete}
                onEdit={onEdit}
              />
            )
          )}
      </div>

      <GenericModal isOpen={isOpen} onClose={closeMenu}>
        <h1>Cadastrar Tarefa</h1>
        <FormTask
          clickCancelar={closeMenu}
          onSubmit={onSubmit}
          listId={especificList.id}
        />
      </GenericModal>
    </section>
  );
}

export default TaskCard;
