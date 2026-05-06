import React from "react";

type Status = "pendente" | "andamento" | "concluida";

interface TaskDB {
  id: number;
  title: string;
  description: string;
  status: Status;
  authorId: number;
  listId: number;
  createdAt: Date;
  finishedAt: Date;
}

interface ListDB {
  id: number;
  title: string;
  description: string;
  createdAt: Date;
  tasks: TaskDB[];
}

type ListContextType = {
  AllLists: Array<ListDB>;
  especificList: ListDB;
  setEspecificList: React.Dispatch<React.SetStateAction<ListDB>>;
  setAllLists: React.Dispatch<React.SetStateAction<Array<ListDB>>>;
};

const ListContext = React.createContext<ListContextType | null>(null);

export default ListContext;
