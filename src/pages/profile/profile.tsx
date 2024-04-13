import { useState } from "react";
import ProfileInput from "../../components/profile-input/profile-input";
import { useForm } from "../../hooks/hooks";
import { useSelector } from "../../store/store";
import styles from "./profile.module.scss";

function Profile() {
    const [inputIsActive, setInputIsActive] = useState(false);
  const { name, avatar, email, phone } = useSelector(
    (store) => store.user.user
  );

  function clickButton(evt: React.SyntheticEvent) {
    evt.preventDefault()

    setInputIsActive(true)
  }

  const { handleChange, inputValues } = useForm({
    name: name,
    email: email,
  });

  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src={avatar} alt="аватар" />
      <div className={styles.container}>
        <ProfileInput name="имя" type="text" value={name} isActive={inputIsActive} />
        <ProfileInput name="email" type="text" value={email} isActive={inputIsActive} />
        <ProfileInput name="phone" type="number" value={phone} isActive={inputIsActive} />
      </div>

      <button className={styles.button} onClick={clickButton}>Редактировать</button>
    </div>
  );
}

export default Profile;
