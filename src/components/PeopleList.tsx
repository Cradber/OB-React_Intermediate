import React from "react";
import {PersonItem} from "./PersonItem";
import {AddUserIcon} from "./Icon";
import {usePeopleList} from "../hooks";
import {Form} from "./Form";

export const PeopleList = () => {
    const {
        data: people,
        isNew,
        newPerson,
        removePerson,
        cancelNewPerson,
        addPerson
    } = usePeopleList();

    return (
        <>
            <div className={`w-3/6  | divide-y relative ${isNew ? 'blur-md' : ''}`}>
                <h1 className="block | font-medium | pb-5 pt-16 w-full | text-3xl text-gray-700 sticky top-0 bg-white z-10 border-b-2">
                    People

                    <div
                        onClick={newPerson}
                        className="absolute right-6 top-14 z-10 bg-gray-100 p-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition"
                    >
                        <AddUserIcon />
                    </div>
                </h1>
                {people.map(person => (
                    <PersonItem
                        person={person}
                        removePerson={removePerson}
                        key={person.uid} />
                ))}
            </div>

            {isNew &&
                <div className="fixed top-0 left-0 bottom-0 right-0 overflow-hidden bg-transparent z-10">
                    <Form add={addPerson} cancel={cancelNewPerson}/>
                </div>}
        </>
    )
}
