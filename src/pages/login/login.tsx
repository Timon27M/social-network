import styles from "./login.module.scss";
import Auth from "../../components/Auth/Auth";
import { useForm } from "../../hooks/hooks";
import { useDispatch } from "../../store/store";
import { loginUser } from "../../store/actionCreaters";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserSlice, { userSlice } from "../../store/reducers/UserSlice";
import userApi from "../../utils/api";

function Login() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { inputValues, handleChange } = useForm({
    email: "",
    password: "",
  });

  useEffect(() => {
    dispatch(userSlice.actions.resetState())
  }, []);

  function submitForm(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log(inputValues);
    const inputValuesObj = {
      email: inputValues.email,
      password: inputValues.password,
    };
    dispatch(loginUser(inputValuesObj, navigate));
  }

  return (
    <Auth
      title="Авторизация"
      text="Еще не зарегистрированы? "
      textButton="Регистрация"
    >
      <form action="" className={`${styles.form}`} onSubmit={submitForm}>
        <div className={`${styles.inputs}`}>
          <p className={`${styles.text}`}>email</p>
          <input
            onChange={handleChange}
            name="email"
            placeholder="Введите email"
            type="text"
            className={`${styles.input}`}
          />
        </div>
        <div className={`${styles.inputs}`}>
          <p className={`${styles.text}`}>пароль</p>
          <input
            onChange={handleChange}
            name="password"
            placeholder="Введите пароль"
            type="password"
            className={`${styles.input}`}
          />
        </div>
        <button className={`${styles.buttonSubmit}`}>Войти</button>
      </form>
    </Auth>
  );
}

export default Login;
