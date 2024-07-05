import {Link, useMatch, useResolvedPath} from "react-router-dom";
import React from "react";

interface IProps {
    value: string;
    text: string;
    onClick: (href: string) => void
}

const MenuItem: React.FC<IProps> = ({value, text, onClick}) => {

    const resolved = useResolvedPath(`${value}`);
    const match = useMatch({path: resolved.pathname, end: false});

    return <button
        onClick={() => onClick(value)}
        className={`${match ? 'bg-midnight-green dark:bg-midnight-green text-white' : 'bg-white hover:bg-gray-100 dark:hover:bg-gray-700'} flex-1 text-gray-900 border font-medium rounded-lg text-sm px-5 py-2.5 my-2 mx-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700`}>
        {text}
    </button>
}

export default MenuItem