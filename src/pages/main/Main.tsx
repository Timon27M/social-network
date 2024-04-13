import { useEffect } from "react";
import styles from "./Main.module.scss";
import { getUser } from "../../store/actionCreaters";
import { useDispatch } from "../../store/store";
import Navbar from "../../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={`${styles.main}`}>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
