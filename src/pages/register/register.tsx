import styles from "./register.module.css";
import Auth from "../../components/Auth/Auth";
import { useForm } from "../../hooks/hooks";
import { useEffect } from "react";
import userApi from "../../utils/api";

function Register() {
  const { handleChange, inputValues } = useForm({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  function submitForm(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log(inputValues)
  }

  return (
    <Auth title="Регистрация" text="Уже зарегистрированы? " textButton="Войти">
      <form className={`${styles.form}`} onSubmit={submitForm}>
        <div className={`${styles.inputs}`}>
          <p className={`${styles.text}`}>логин</p>
          <input
            onChange={handleChange}
            name="name"
            placeholder="Введите логин"
            type="text"
            className={`${styles.input}`}
          />
        </div>
        <div className={`${styles.inputs}`}>
          <p className={`${styles.text}`}>email</p>
          <input
            onChange={handleChange}
            name="email"
            placeholder="Введите почту"
            type="text"
            className={`${styles.input}`}
          />
        </div>
        <div className={`${styles.inputs}`}>
          <p className={`${styles.text}`}>телефон</p>
          <input
            onChange={handleChange}
            name="phone"
            placeholder="Введите телефон"
            type="tel"
            className={`${styles.input}`}
          />
        </div>
        <div className={`${styles.inputs}`}>
          <p className={`${styles.text}`}>пароль</p>
          <input
            onChange={handleChange}
            name="password"
            placeholder="Введите пароль"
            type="text"
            className={`${styles.input}`}
          />
        </div>
        <button type="submit" className={`${styles.buttonSubmit}`}>
          Зарегистрироваться
        </button>
      </form>
    </Auth>
  );
}

export default Register;
