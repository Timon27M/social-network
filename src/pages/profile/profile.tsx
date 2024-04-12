import { useSelector } from '../../store/store';
import styles from './profile.module.scss'

function Profile() {
    const { name, avatar, email } = useSelector(store => store.user.user)

    return (
        <div className={styles.profile}>
            <img className={styles.avatar} src={avatar} alt="" />
        </div>
    )
}

export default Profile; 