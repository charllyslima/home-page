import React, {ReactElement} from "react";
import {NavLink, useMatch, useResolvedPath} from "react-router-dom";

interface IProps {
    href: string;
    icon: ReactElement;
    text: string;
}

const SidebarItem: React.FC<IProps> = (props) => {
    const resolved = useResolvedPath(props.href);
    const match = useMatch({path: resolved.pathname, end: true});

    return <li
        className={`w-full`}>
        <NavLink to={props.href}
                 className={`p-1 md:p-3 flex items-center rounded-lg shadow-lg hover:text-anti-flash-white hover:bg-delftBlue-700 dark:hover:bg-delftBlue-700 w-full dark:text-white ${match ? 'bg-delftBlue-600 text-anti-flash-white' : ''}`}>
            <span className={`w-full text-center flex flex-col items-center`}>
                {props.icon}
                {props.text}
            </span>

        </NavLink>
    </li>
}

export default SidebarItem