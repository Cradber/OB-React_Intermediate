import {ChangeEvent, FormEvent, useState} from "react";

export const useForm = <T>(initSTate: T) => {
    const [registerData, setRegisterData] = useState<T>(initSTate);

    const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(prevState => ({
            ...prevState,
            [ev.target.name]: ev.target.value
        }))
    }

    const submit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        console.log(registerData)
    }

    return {registerData, onChange, submit};
}
