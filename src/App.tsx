import {usePeople} from "./hooks";
import React from "react";
import {DisplayFetchedData} from "./components/DisplayFetchedData";
import {PeopleList} from "./components/PeopleList";

const App = () => {
    const people = usePeople(15);

    return (
        <div
            className={
                `| h-screen
                 | flex ${people.loading ? 'items-center' : 'items-start'} justify-center`
            }
        >
            <DisplayFetchedData response={people}>
                <PeopleList />
            </DisplayFetchedData>
        </div>
    )
}

export default App
