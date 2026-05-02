import styles from "./list.module.css";
import React from "react";

type ListProps = {
  id: number;
  title: string;
  description: string;
  data: string;
  onEdit?: () => void;
  onDelete?: () => void;
  onclick?: (e: React.MouseEvent) => void;
};

function List({ id, title, description, data, onclick }: ListProps) {
  return (
    <div className={styles.card} onClick={onclick} id={String(id)}>
      <div className={styles.left}>
        <span className={styles.arrow}>›</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <span className={styles.date}>Criada em {data}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.edit}>✏️</button>
        <button className={styles.delete}>🗑️</button>
      </div>
    </div>
  );
}

export default List;
