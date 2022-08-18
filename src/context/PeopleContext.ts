import React, {createContext} from "react";
import {Person} from "../interfaces";
import {PeopleAction} from "../reducers/peopleReducer";

export interface PeopleContextProp {
    data: Person[];
    dispatch?: React.Dispatch<PeopleAction>;
}

export const peopleContext = createContext<PeopleContextProp>({} as PeopleContextProp);
