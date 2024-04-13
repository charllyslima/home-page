import {Link, useMatch, useResolvedPath} from "react-router-dom";
import React from "react";

interface IProps {
    href: string;
    text: string;
}

const MenuItem: React.FC<IProps> = ({href, text}) => {

    const resolved = useResolvedPath(`${href}`);
    const match = useMatch({path: resolved.pathname, end: false});

    return <Link to={`/resume/${href}`}
                 className={`${match ? 'bg-midnight-green dark:bg-midnight-green text-white' : 'bg-white hover:bg-gray-100 dark:hover:bg-gray-700'} flex-1 text-gray-900 border font-medium rounded-lg text-sm px-5 py-2.5 my-2 mx-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700`}>
        {text}
    </Link>
}

export default MenuItem