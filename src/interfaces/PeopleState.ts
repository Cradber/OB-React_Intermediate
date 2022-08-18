import {Person} from "./People";

export interface PeopleState {
    loading: boolean;
    error: boolean;
    data: Person[];
}

export const INITIAL_PEOPLE_STATE: PeopleState = {
    data: [],
    error: false,
    loading: true,
}
