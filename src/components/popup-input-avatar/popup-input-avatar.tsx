import { FC } from "react";
import styles from "./popup-input-avatar.module.scss";
import userApi from "../../utils/api";
import { useForm } from "../../hooks/hooks";
import { useDispatch, useSelector } from "../../store/store";
import { updateUserAvatar } from "../../store/actionCreaters";

interface IPopupInputAvatar {
  popupIsActive: boolean;
  setPopupIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupInputAvatar: FC<IPopupInputAvatar> = ({
  popupIsActive,
  setPopupIsActive,
}) => {
  const dispatch = useDispatch();
  const { avatar } = useSelector((state) => state.user.user);
  const { inputValues, handleChange, addValues } = useForm({
    avatar: "",
  });

  function clickButton(evt: React.SyntheticEvent) {
    evt.preventDefault();

    setPopupIsActive(false);
    userApi
      .updateAvatarUser(inputValues.avatar)
      .then(() => {
        const avatarObj = {
          avatar: inputValues.avatar,
        };
        dispatch(updateUserAvatar(avatarObj));
      })
      .catch((err) => {
        console.log("err");

        const avatarObjDefault = {
          avatar: avatar,
        };

        dispatch(updateUserAvatar(avatarObjDefault));
      })
      .finally(() => {
        const inputValueDelete = {
          avatar: "",
        };
        addValues(inputValueDelete);
      });
  }

  function clickOverlay(evt: React.SyntheticEvent) {
    setPopupIsActive(false);

    const inputValueDelete = {
        avatar: "",
      };
      addValues(inputValueDelete);
  }

  function clickPopup(evt: React.SyntheticEvent) {
    evt.stopPropagation();
  }

  return (
    <div
      className={`${styles.overlay} ${popupIsActive && styles.overlayActive}`}
      onClick={clickOverlay}
    >
      <div className={styles.popup} onClick={clickPopup}>
        <h3 className={styles.title}>Вставьте ссылку</h3>
        <input
          type="text"
          name="avatar"
          value={inputValues.avatar}
          onChange={handleChange}
          className={styles.input}
        />
        <button
          className={`${styles.button} ${
            inputValues.avatar !== "" && styles.buttonActive
          }`}
          disabled={inputValues.avatar !== "" ? false : true}
          onClick={clickButton}
        >
          Редактировать
        </button>
      </div>
    </div>
  );
};

export default PopupInputAvatar;
