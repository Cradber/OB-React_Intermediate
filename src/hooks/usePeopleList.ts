import {Person} from "../interfaces";
import {useContext, useState} from "react";
import {peopleContext, PeopleContextProp} from "../context/PeopleContext";

export const usePeopleList = () => {
    const [isNew, setIsNew] = useState<boolean>(false);
    const {data, dispatch} = useContext<PeopleContextProp>(peopleContext);

    const addPerson = (user: Person) => dispatch!({type: 'addPerson', payload: user})

    const cancelNewPerson = () => setIsNew(false);

    const newPerson = () => {
        setIsNew(!isNew);
        // dispatch!({type: 'addPerson', payload: newUser})
    };
    const removePerson = (uid: string) => {
        const idx = data.map(person => person.uid).findIndex(el => el === uid);
        dispatch!({type: 'removePerson', payload: idx})
    }

    return {
        data,
        isNew,
        newPerson,
        removePerson,
        cancelNewPerson,
        addPerson
    };
}
