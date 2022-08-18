import React from "react";

interface Props {
    dt: string;
    dd: string;
    style?: string;
    link?: string;
    children?: JSX.Element;
}

export const DataDescription = ({dt, dd, style, link = undefined, children}: Props) => (
    <div className={style ? style : ''}>
        <dt className="sr-only">{dt}</dt>
        <dd className={`${link ? 'text-slate-500 hover:cursor-pointer hover:underline' : 'text-slate-500'}`}>
            {link
                ? <a href={link}>{children} {dd}</a>
                : `${!children && ''} ${dd}`
            }
        </dd>
    </div>
)
