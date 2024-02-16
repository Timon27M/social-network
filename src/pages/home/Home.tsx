import styles from './Home.module.css'
import icon from '../../images/icons8-houseparty-96.png'

function Home() {
    return (
        <div className={`${styles.home}`}>
            <div className={`${styles.navBar}`}>
                <img src={icon} alt="иконка" className={`${styles.icon}`}/>
                <div className={`${styles.authButtons}`}>
                    <button className={`${styles.authButton}`}>Войти</button>
                    <button className={`${styles.authButton}`}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default Home;