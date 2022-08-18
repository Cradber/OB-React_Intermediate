import {ChangeEventHandler} from "react";

interface Props {
    label: string;
    htmlFor: string;
    placeholder?: string;
    type?: string;
    value?: string | number;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>
}

export const Input = ({label, htmlFor, className: style, ...props}: Props) => (
    <div className={`${style ? style : ''}`}>
        <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type="text"
            name={htmlFor}
            id={htmlFor}
            autoComplete="given-name"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
            {...props}
        />
    </div>
)
