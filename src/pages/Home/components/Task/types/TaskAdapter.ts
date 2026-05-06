export type Status = "pendente" | "andamento" | "concluida";

export default interface TaskAdapter {
  title: string;
  description: string;
  status: Status;
  finishedAt: Date;
  createdAt: Date;
  listId: number;
}
