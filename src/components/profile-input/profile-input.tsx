import { FC, useEffect, useState } from "react";
import styles from "./profile-input.module.scss";

interface IProfileInput {
  value: string | number;
  name: string;
  type: string;
  isActive: boolean;
}

const ProfileInput: FC<IProfileInput> = ({ value, name, type, isActive }) => {
  return (
    <div className={styles.container}>
      <p className={styles.nameInput}>{name}</p>
      <input
        className={`${styles.input}`}
        disabled={isActive === true ? false : true}
        type={type}
        value={value}
      />
    </div>
  );
};

export default ProfileInput;
