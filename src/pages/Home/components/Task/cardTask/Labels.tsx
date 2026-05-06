import style from "./taskCard.module.css";

type Filter = "todas" | "pendente" | "andamento" | "concluida";

type LabelsProps = {
  active: Filter;
  setActive: (status: Filter) => void;
};

export default function Labels({ active, setActive }: LabelsProps) {
  return (
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
  );
}
