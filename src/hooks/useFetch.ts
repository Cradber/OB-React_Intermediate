import {INITIAL_PEOPLE_STATE} from "../interfaces";
import {useEffect, useState} from "react";
import {PeopleResponse} from "../interfaces/PeopleResponse";
import {PeopleState} from "../interfaces";

export const useFetch = (url: string) => {
    const [state, setState] = useState<PeopleState>(INITIAL_PEOPLE_STATE);

    useEffect(() => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                setState({
                    ...state,
                    loading: false,
                    data: [...data.map((
                        {
                            uid, email, username, last_name, first_name, avatar, employment, phone_number
                        }: PeopleResponse) => ({
                            uid, email, username, last_name, first_name, avatar, employment, phone_number,
                            status: Math.round(Math.random() * 10) % 2 && true
                    }))]
                })
            })
            .catch(err => setState({
                ...state,
                loading: false,
                error: true
            }));
    }, [])

    return state;
}
