import {Person} from "../interfaces";

export type PeopleAction =
    | { type: 'setPeople', payload: Person[] }
    | { type: 'addPerson', payload: Person }
    | { type: 'removePerson', payload: number }

interface State {
    people: Person[];
}

export const peopleReducer = (state: State, action: PeopleAction): State => {
    switch (action.type) {
        case "setPeople":
            return {...state, people: action.payload}
        case "addPerson":
            return {people: [action.payload, ...state.people]}
        case "removePerson": {
            const people = [...state.people];
            people.splice(action.payload, 1);
            return {people}
        }
    }
}
