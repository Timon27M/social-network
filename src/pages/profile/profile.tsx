import { useEffect, useState } from "react";
import ProfileInput from "../../components/profile-input/profile-input";
import { useForm } from "../../hooks/hooks";
import { useDispatch, useSelector } from "../../store/store";
import styles from "./profile.module.scss";
import { updateUser } from "../../store/actionCreaters";
import userApi from "../../utils/api";

function Profile() {
  const dispatch = useDispatch();

  const [inputIsActive, setInputIsActive] = useState(false);
  const { name, avatar, email, phone } = useSelector(
    (store) => store.user.user
  );

  function clickButton(evt: React.SyntheticEvent) {
    evt.preventDefault();

    if (inputIsActive === true) {
      const values = {
        name: inputValues.name,
        email: inputValues.email,
        phone: inputValues.phone,
        avatar: inputValues.avatar,
      };
      dispatch(updateUser(values));
      userApi.updateUser(values)
    }

    setInputIsActive(!inputIsActive);
  }

  const { handleChange, inputValues, addValues } = useForm({
    name: name,
    email: email,
    phone: phone,
    avatar: avatar,
  });

  useEffect(() => {
    addValues({ name, avatar, email, phone });
  }, [name, avatar, email, phone]);

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
          value={inputValues.email}
          isActive={inputIsActive}
          handleChange={handleChange}
        />
        <ProfileInput
          name="phone"
          type="number"
          nameInput="phone"
          value={inputValues.phone}
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
