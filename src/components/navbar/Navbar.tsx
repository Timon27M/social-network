import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import iconChats from "../../images/message.png";
import icon from "../../images/icons8-houseparty-96.png";

function Navbar() {
  return (
    <div className={`${styles.navbar}`}>
      <div>
        <NavLink to={"/chats"} className={`${styles.navButton}`}>
          <img className={`${styles.iconMain}`} src={icon} alt="икона" />
        </NavLink>
      </div>
      <div className={`${styles.icons}`}>
        <NavLink to={"/chats"} className={`${styles.navButton}`}>
          <img src={iconChats} alt="икона" />
        </NavLink>
        <NavLink to={"/chats"} className={`${styles.navButton}`}>
          <img src={iconChats} alt="икона" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
