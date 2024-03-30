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
        className={`p-1 md:p-3 flex items-center rounded-lg shadow-lg bg-anti-flash-white hover:text-anti-flash-white hover:bg-brandeis-blue dark:hover:bg-brandeis-blue w-full dark:bg-eerie-black dark:text-white ${match ? 'bg-brandeis-blue dark:bg-brandeis-blue text-anti-flash-white' : ''}`}>
        <NavLink to={props.href} className={`w-full text-center flex flex-col items-center`}>
            {props.icon}
            {props.text}
        </NavLink>
    </li>
}

export default SidebarItem