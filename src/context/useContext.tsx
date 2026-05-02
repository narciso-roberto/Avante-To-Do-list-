import React from "react";

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  authorId: number;
  listId: number;
  createdAt: string;
  finishedAt: string | null;
}

interface List {
  id: number;
  title: string;
  description: string;
  data: string;
  tasks: Task[];
}

type ListContextType = {
  AllLists: Array<List>;
  especificList: List;
  setEspecificList: React.Dispatch<React.SetStateAction<List>>;
};

const ListContext = React.createContext<ListContextType | null>(null);

export default ListContext;
