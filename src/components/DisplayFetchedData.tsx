import { peopleContext } from "../context/PeopleContext";
import {useDisplayFetchedData} from "../hooks";

interface State {
    loading: boolean;
    error: boolean;
    data: any;
}

interface Props {
    response: State;
    children: JSX.Element;
}

export const DisplayFetchedData = ({response, children}: Props) => {
    const {loading, error, state, dispatch} = useDisplayFetchedData(response);

    return (
        <peopleContext.Provider value={{
            data: state.people,
            dispatch
        }}>
            {loading && <h2>Loading data...</h2>}
            {error && <h2>An error has happened</h2>}
            {!(loading || error) && <>{children}</>}
        </peopleContext.Provider>
    )
}
