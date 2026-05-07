import React from "react";
import style from "./taskCard.module.css";
import ListContext from "../../../../../context/useContext";
import Button from "@components/button/Button";
import GenericModal from "@components/genericModal/GenericModal";
import FormTask from "../formTask/FormTask";
import Task from "../task/Task";
import type TaskAdapter from "../types/TaskAdapter";
import Labels from "./Labels";

type Filter = "todas" | "pendente" | "andamento" | "concluida";

function TaskCard() {
  const { especificList, setEspecificList, setAllLists } =
    React.useContext(ListContext);
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

    try {
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

      if (!response.ok) {
        throw new Error("Erro ao cadastrar tarefa");
      }

      const updatedList = {
        ...especificList,
        tasks: especificList.tasks ? [...especificList.tasks, data] : [data],
      };

      setEspecificList(updatedList);

      setAllLists((prevLists) =>
        prevLists.map((list) =>
          list.id === updatedList.id ? updatedList : list
        )
      );

      closeMenu();
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  const onDelete = async (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    try {
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

      if (!response.ok) {
        throw new Error("Erro ao deletar tarefa");
      }

      const updatedList = {
        ...especificList,
        tasks: especificList.tasks.filter((task) => task.id !== id),
      };

      setEspecificList(updatedList);

      setAllLists((prevLists) =>
        prevLists.map((list) =>
          list.id === updatedList.id ? updatedList : list
        )
      );
    } catch (error) {
      console.log(error);

      if (error instanceof Error) {
        alert(error.message);
      }
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

      <Labels active={active} setActive={setActive} />

      <div className={style.listList}>
        {tasks &&
          tasks
            .filter((task) => {
              if (active === "todas") return true;
              if (active === "pendente") return task.status === "pendente";
              if (active === "andamento") return task.status === "andamento";
              if (active === "concluida") return task.status === "concluida";
              return true;
            })
            .map(
              (
                {
                  id,
                  title,
                  description,
                  createdAt,
                  status,
                  finishedAt,
                  listId,
                },
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
