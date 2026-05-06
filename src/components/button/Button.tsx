import type React from "react";
import style from "./button.module.css";

type ButtonProps = {
  text?: string;
  action?: (e: React.MouseEvent) => void;
};

function Button({ text, action }: ButtonProps) {
  return (
    <button className={style.button} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
