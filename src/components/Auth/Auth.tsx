import styles from "./Auth.module.scss";
import { Children, FC } from "react";
import { useNavigate } from "react-router-dom"; 

interface IAuth {
  title: string;
  text: string;
  textButton: string;
  children?: React.ReactNode;
}

const Auth: FC<IAuth> = ({ title, children, text, textButton }) => {

    const navigate = useNavigate();

    function clickButtonBack() {
        navigate(-1)
    }

  return (
    <div className={`${styles.auth}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.title}`}>{title}</h2>
        {children}
      </div>
        <button className={`${styles.button}`} onClick={clickButtonBack}>Назад</button>
        <span className={`${styles.span}`}>
            {text} 
            <button className={`${styles.buttonAuth}`}>{textButton}</button> 
        </span>

    </div>
  );
};

export default Auth;
