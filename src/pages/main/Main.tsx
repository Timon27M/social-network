import { useEffect } from "react";
import styles from "./Main.module.scss";
import { getUser } from "../../store/actionCreaters";
import { useDispatch } from "../../store/store";
import Navbar from "../../components/navbar/Navbar";

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <div className={`${styles.main}`}>
      <div>
        <Navbar />
      </div>
      <div></div>
      <p className={`${styles.text}`}>
        ОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ
        СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ
        СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ
        СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ СТРАНИЦАОСНОВНАЯ
        СТРАНИЦА
      </p>
    </div>
  );
}

export default Main;
