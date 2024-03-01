import { useState } from "react";

type TInputValues = {
    [name: string]: string;
}

export function useForm(values: TInputValues) {
    const [inputValues, setInputValues] = useState(values);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = evt.target;

        setInputValues({
            ...inputValues,
            [name]: value
        })
    }
    
    return {inputValues, handleChange}
}