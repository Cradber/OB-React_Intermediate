import {useEffect, useReducer} from "react";
import {peopleReducer} from "../reducers/peopleReducer";

interface State {
    loading: boolean;
    error: boolean;
    data: any;
}

export const useDisplayFetchedData = (response: State) => {
    const {loading, error, data} = response;
    const [state, dispatch] = useReducer(peopleReducer, {people: []});

    useEffect(() => {
        dispatch({type: 'setPeople', payload: data});
    }, [loading])

    return {loading, error, state, dispatch};
}
