import {Input} from "./Input";
import {useForm} from "../hooks";
import {Person} from "../interfaces";
import {FormEvent} from "react";
import {v4 as uuid} from "uuid";
import {InfoIcon} from "./Icon";

interface Props {
    cancel: () => void;
    add: (user: Person) => void;
}

export const Form = ({add, cancel}: Props) => {
    const initData = {
        avatar: "",
        email: "yankielarapacheco@protonmail.com",
        first_name: "Yankiel",
        last_name: "Pacheco",
        phone_number: "+34 624 310 948",
        status: false,
        uid: "",
        username: "Cradber"
    }
    const {registerData, onChange} = useForm<Person>(initData);
    const {email, first_name, last_name, phone_number, username} = registerData;
    const addPerson = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        fetch('https://random-data-api.com/api/users/random_user')
            .then(resp => resp.json())
            .then(data => data.avatar)
            .then(avatar => {
                add({
                    ...registerData,
                    uid: uuid(),
                    avatar,
                })
            })
        cancel()
    }

    return (
        <div className="relative flex items-center justify-center h-screen mt-5 md:mt-0 md:col-span-1">

            <form action="#" method="POST" noValidate onSubmit={addPerson}
            >
                <div className="shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="text-left col-span-6 text-3xl text-gray-700 font-medium">
                                <h1>
                                    New contact
                                </h1>
                                <span className="flex items-center text-sm text-yellow-500 mt-2">
                                    <InfoIcon />
                                    Image will be automatically set
                                </span>
                            </div>

                            <Input
                                label="First name"
                                htmlFor="first_name"
                                className="col-span-6 sm:col-span-3"
                                value={first_name}
                                onChange={onChange}
                            />
                            <Input
                                label="Last name"
                                htmlFor="last_name"
                                className="col-span-6 sm:col-span-3"
                                value={last_name}
                                onChange={onChange}
                            />
                            <Input
                                label="Username"
                                htmlFor="username"
                                className="col-span-6 sm:col-span-3"
                                placeholder="@User"
                                value={username}
                                onChange={onChange}
                            />
                            <Input
                                label="Phone number"
                                htmlFor="phone_number"
                                className="col-span-6 sm:col-span-3"
                                placeholder="+1 (123) 456 7890"
                                value={phone_number}
                                onChange={onChange}
                            />
                            <Input
                                label="Email address"
                                htmlFor="email"
                                className="col-span-6"
                                placeholder="youremail@domine.com"
                                value={email}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 flex justify-between">
                        <button
                            onClick={cancel}
                            className="inline-flex justify-center py-2 px-4 mr-5 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700 focus:bg-red-800 "
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:bg-indigo-800 "
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
