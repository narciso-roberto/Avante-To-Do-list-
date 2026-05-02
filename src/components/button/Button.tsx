import style from "./button.module.css";

type ButtonProps = {
  text?: string;
  action?: () => void;
};

function Button({ text, action }: ButtonProps) {
  return (
    <button className={style.button} onClick={action}>
      {text}
    </button>
  );
}

export default Button;
