import styles from "./Task.module.css";
// import React from "react";

type TaskProps = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  status: string;
  finishedAt: string;
  onEdit?: () => void;
  onDelete?: () => void;
};

function Task({
  id,
  title,
  description,
  createdAt,
  status,
  finishedAt,
}: TaskProps) {
  return (
    <div className={styles.card} id={String(id)}>
      <div className={styles.left}>
        <span className={styles.arrow}>›</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>
          {title}{" "}
          <span className={`${styles.statusBase} ${styles[status]}`}>
            {status}
          </span>
        </h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>
          Criada em {createdAt}, Prazo ate {finishedAt}
        </span>
      </div>

      <div className={styles.actions}>
        <button className={styles.edit}>✏️</button>
        <button className={styles.delete}>🗑️</button>
      </div>
    </div>
  );
}

export default Task;
