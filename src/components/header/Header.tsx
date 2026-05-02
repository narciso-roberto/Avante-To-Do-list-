// import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header className={style.headerBg}>
      <div className={style.header}>
        <div className={style.content}>
          <h1>Gerenciador de Tarefas</h1>
          <p>Organize suas tarefas e listas de forma eficiente</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
