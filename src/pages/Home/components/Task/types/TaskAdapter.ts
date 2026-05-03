type Filter = "todas" | "pendente" | "andamento" | "concluida";

export default interface TaskAdapter {
  title: string;
  description: string;
  status: Filter;
  date: string;
  creatAt: string
  listId: number;
}
