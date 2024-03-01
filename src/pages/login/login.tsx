import styles from "./login.module.css";
import Auth from "../../components/Auth/Auth";
import { useForm } from "../../hooks/hooks";

function Login() {

  const { inputValues, handleChange } = useForm({
    name: "",
    password: "",
  });

  function submitForm(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    console.log(inputValues)
}

  return (
    <Auth title="Авторизация" text="Еще не зарегистрированы? " textButton="Регистрация">
      <form action="" className={`${styles.form}`} onSubmit={submitForm}>
        <div className={`${styles.inputs}`}>
            <p className={`${styles.text}`}>логин</p>
            <input onChange={handleChange} name="name" placeholder='Введите логин' type="text" className={`${styles.input}`} />
        </div>
        <div className={`${styles.inputs}`}>
            <p className={`${styles.text}`}>пароль</p>
            <input onChange={handleChange} name="password" placeholder='Введите пароль' type="text" className={`${styles.input}`} />
        </div>
         <button className={`${styles.buttonSubmit}`}>Войти</button>
        </form>
    </Auth>
  );
}

export default Login;
