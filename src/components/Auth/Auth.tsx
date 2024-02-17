import styles from './Auth.module.css'
import { FC } from 'react';

interface IAuth {
    title: string;
} 

const Auth: FC<IAuth> = ({ title }) => {
    return (
        <div className={`${styles.auth}`}>
            <div className={`${styles.container}`}>
        <h2 className={`${styles.title}`}>{title}</h2>
        <form action="" className={`${styles.form}`}>
        <div className={`${styles.inputs}`}>
            <p className={`${styles.text}`}>логин</p>
            <input placeholder='Введите логин' type="text" className={`${styles.input}`} />
        </div>
        <div className={`${styles.inputs}`}>
            <p className={`${styles.text}`}>пароль</p>
            <input placeholder='Введите пароль' type="text" className={`${styles.input}`} />
        </div>
        </form>
      </div>
        </div>
    );
  }
  
  export default Auth;