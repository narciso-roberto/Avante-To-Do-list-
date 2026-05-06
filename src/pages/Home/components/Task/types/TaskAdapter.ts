type Filter = "todas" | "pendente" | "andamento" | "concluida";

export default interface TaskAdapter {
  title: string;
  description: string;
  status: Filter;
  finishedAt: Date;
  createdAt: Date;
  listId: number;
}
