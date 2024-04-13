import React, {ReactElement} from "react";
import {NavLink, useMatch, useResolvedPath} from "react-router-dom";

interface IProps {
    href: string;
    icon: ReactElement;
    text: string;
}

const SidebarItem: React.FC<IProps> = (props) => {
    const resolved = useResolvedPath(props.href);
    const match = useMatch({path: resolved.pathname, end: false});

    return <li
        className={`p-1 md:p-3 flex items-center rounded-lg shadow-lg bg-anti-flash-white hover:text-anti-flash-white hover:bg-midnight-green dark:hover:bg-midnight-green w-full dark:bg-eerie-black dark:text-white ${match ? 'bg-midnight-green dark:bg-midnight-green text-anti-flash-white' : ''}`}>
        <NavLink to={props.href} className={`w-full text-center flex flex-col items-center`}>
            {props.icon}
            {props.text}
        </NavLink>
    </li>
}

export default SidebarItem