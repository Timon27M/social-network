import styles from "./Home.module.css";
import icon from "../../images/icons8-houseparty-96.png";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className={`${styles.home}`}>
      <div className={`${styles.navBar}`}>
        <img src={icon} alt="иконка" className={`${styles.icon}`} />
        <div className={`${styles.authButtons}`}>
          <NavLink to={'/login'} className={`${styles.authButton}`}>Войти</NavLink>
          <NavLink to={'/register'} className={`${styles.authButton}`}>Регистрация</NavLink>
        </div>
      </div>
      <div className={`${styles.infoBlock}`}>
        <h1 className={`${styles.title}`}>Социальная сеть</h1>
      </div>
    </div>
  );
}

export default Home;
