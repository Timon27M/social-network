import styles from "./Auth.module.scss";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "../../store/store";
//ssh test23
interface IAuth {
  title: string;
  text: string;
  textButton: string;
  children?: React.ReactNode;
}

const Auth: FC<IAuth> = ({ title, children, text, textButton }) => {
  const { error } = useSelector((state) => state.user);

  const navigate = useNavigate();

  function clickButtonBack() {
    navigate(-1);
  }

  function clickButtonTransition() {
    if (textButton === "Регистрация") {
      navigate("/register", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }

  return (
    <div className={`${styles.auth}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.title}`}>{title}</h2>
        <span className={`${styles.textError}`}>{error}</span>
        {children}
      </div>
      <button className={`${styles.button}`} onClick={clickButtonBack}>
        Назад
      </button>
      <span className={`${styles.span}`}>
        {text}
        <button
          className={`${styles.buttonAuth}`}
          onClick={clickButtonTransition}
        >
          {textButton}
        </button>
      </span>
    </div>
  );
};

export default Auth;
