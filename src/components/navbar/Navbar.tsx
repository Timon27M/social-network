import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.scss";
import iconChats from "../../images/icon-message.png";
import iconProfile from "../../images/icon-profile.png";
import icon from "../../images/icons8-houseparty-96.png";
import { useEffect } from "react";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    console.log(location)
  }, [])

  return (
    <div className={`${styles.navbar}`}>
      <div>
        <NavLink to={"/main"} className={`${styles.navButton}`}>
          <img className={`${styles.iconMain}`} src={icon} alt="икона" />
        </NavLink>
      </div>
      <div className={`${styles.icons}`}>
        {/* <div className={styles.iconBlock}> */}
          <NavLink
            to={"/main/chats"}
            className={`${location.pathname === '/main/chats' ? styles.iconActive : styles.icon } ${styles.navButton}`}
          >
            <img src={iconChats} alt="икона" />
          </NavLink>
          {/* {location.pathname === "/main/chats" && (
            <span className={styles.activeDot}></span>
          )} */}
        {/* </div> */}
        <NavLink 
          to={"/main/chats"}
          className={`${styles.icon} ${styles.navButton}`}
        >
          <img src={iconChats} alt="икона" />
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/main/profile"}
          className={`${location.pathname === '/main/profile' ? styles.iconActive : styles.icon } ${styles.navButton}`}
        >
          <img src={iconProfile} className={styles.iconImage} alt="икона" />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
