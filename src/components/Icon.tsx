import React from "react";

export const DotInactiveStatus = () => <DotIcon style="bg-gray-400" />

export const DotActiveStatus = () => <DotIcon style="bg-green-600" />

const DotIcon = ({style}: {style: string}) => (
    <div className={`w-2 h-2 rounded-full inline-flex mr-1 ${style ? style : ''}`}></div>
)

export const InfoIcon = () => (
    <Icon style="mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </Icon>
)

export const AddUserIcon = () => (
    <Icon h={5} w={5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
    </Icon>
)

export const TrashIcon = () => (
    <Icon h={5} w={5}>
        <path strokeLinecap="round" strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
    </Icon>
)

export const EmailIcon = () => (
    <Icon style="inline-flex mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </Icon>
)

export const PhoneIcon = () => (
    <Icon style="inline-flex mr-1">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </Icon>
)

interface Props {
    h?: number,
    w?: number,
    style?: string,
    children: JSX.Element
}
export const Icon = ({h = 4, w = 4, style, children}: Props) => (
    <svg
        className={`h-${h} w-${w} ${style ? style : ''}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor" strokeWidth={2}
    >
        {children}
    </svg>
)
