import { useEffect, useState } from "react";
import ProfileInput from "../../components/profile-input/profile-input";
import { useForm } from "../../hooks/hooks";
import { useSelector } from "../../store/store";
import styles from "./profile.module.scss";
import { updateUser } from "../../store/actionCreaters";

function Profile() {
  const [inputIsActive, setInputIsActive] = useState(false);
  const { name, avatar, email, phone } = useSelector(
    (store) => store.user.user
  );

  function clickButton(evt: React.SyntheticEvent) {
    evt.preventDefault();

    setInputIsActive(!inputIsActive);
  }

  const { handleChange, inputValues } = useForm({
    name: "",
    email: "",
    phone: "1231",
    avatar: "",
  });

  useEffect(() => {
    console.log(name);
    console.log(inputValues.email);
    const values = {
        name: inputValues.name,
        email: inputValues.email,
        phone: inputValues.phone,
        avatar: inputValues.avatar,
    };

    updateUser(values);
  }, [inputValues.name]);

  return (
    <div className={styles.profile}>
      <img className={styles.avatar} src={avatar} alt="аватар" />
      <div className={styles.container}>
        <ProfileInput
          name="имя"
          nameInput="name"
          type="text"
          value={inputValues.name}
          isActive={inputIsActive}
          handleChange={handleChange}
        />
        <ProfileInput
          name="email"
          nameInput="email"
          type="text"
          value={email}
          isActive={inputIsActive}
          handleChange={handleChange}
        />
        <ProfileInput
          name="phone"
          type="number"
          nameInput="phone"
          value={phone}
          isActive={inputIsActive}
          handleChange={handleChange}
        />
      </div>

      <button
        className={`${styles.button} ${inputIsActive && styles.buttonActive}`}
        onClick={clickButton}
      >
        {inputIsActive ? "Редактировать" : "Изменить"}
      </button>
    </div>
  );
}

export default Profile;
