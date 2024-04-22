import { FC, useEffect, useState } from "react";
import styles from "./profile-input.module.scss";

interface IProfileInput {
  value: string | number;
  name: string;
  type: string;
  isActive: boolean;
  nameInput: string;
  handleChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProfileInput: FC<IProfileInput> = ({
  value,
  name,
  type,
  isActive,
  handleChange,
  nameInput,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.nameInput}>{name}</p>
      <input
        name={nameInput}
        className={`${styles.input}`}
        disabled={isActive === true ? false : true}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default ProfileInput;
