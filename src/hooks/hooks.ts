import { useState } from "react";
import { IUser } from "../utils/types";

type TInputValues = {
  [name: string]: string;
};

export function useForm(values: TInputValues) {
  const [inputValues, setInputValues] = useState(values);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  const addValues = (obj: TInputValues) => {
    setInputValues(obj)
  };

  return { inputValues, handleChange, addValues };
}
