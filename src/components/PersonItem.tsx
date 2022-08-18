import {Person} from "../interfaces";
import {DotActiveStatus, DotInactiveStatus, EmailIcon, PhoneIcon, TrashIcon} from "./Icon";
import {DataDescription} from "./DataDescription";
import {useMouseHover} from "../hooks";
import React from "react";

interface Props {
    person: Person;
    removePerson?: (uid: string) => void;
}

export const PersonItem = ({person, removePerson}: Props) => {
    const {hover, toggle_hover} = useMouseHover();

    const {
        username,
        first_name,
        last_name,
        email,
        phone_number,
        avatar,
        status,
        uid
    } = person;

    return (
        <article
            className="flex items-center content-evenly space-x-6 px-6 py-4"
            onMouseEnter={toggle_hover}
            onMouseLeave={toggle_hover}
        >
            <img
                src={avatar}
                alt=""
                width="80"
                height="80"
                className="flex-none rounded-md bg-slate-100 rounded-full ring-2 ring-white"
            />

            <div className="min-w-0 relative flex-auto">
                <h2 className="font-bold text-slate-900 text-lg">
                    {status ? <DotActiveStatus /> : <DotInactiveStatus />}
                    {first_name} {last_name}
                    <span className="ml-5 font-normal text-slate-400 text-sm">@{username}</span>
                </h2>

                <dl className="flex flex-wrap text-sm leading-6 font-medium">
                    <DataDescription dt='Email' dd={email} link={`mailto:${email}`}>
                        <EmailIcon />
                        {/*<svg*/}
                        {/*    className={`h-4 w-4 `}*/}
                        {/*    fill="none"*/}
                        {/*    viewBox="0 0 24 24"*/}
                        {/*    stroke="currentColor" strokeWidth={2}*/}
                        {/*>*/}
                        {/*    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />*/}
                        {/*</svg>*/}
                    </DataDescription>
                    <div className="w-5"></div>
                    <DataDescription dt='Phone number' dd={phone_number} link={`tel:${phone_number}`} >
                        <PhoneIcon />
                    </DataDescription>
                </dl>
            </div>
            {hover &&
                <div
                    onClick={() => removePerson!(uid)}
                    className="bg-gray-100 p-3 rounded-lg hover:cursor-pointer hover:bg-gray-200 active:bg-gray-300 transition">
                <TrashIcon />
            </div>}
        </article>
    )
}
