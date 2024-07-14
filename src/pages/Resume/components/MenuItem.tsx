import React from "react";

interface IProps {
    value: string;
    active: boolean
    text: string;
    onClick: (href: string) => void
}

const MenuItem: React.FC<IProps> = ({value, text, active, onClick}) => {

    return <button
        onClick={() => onClick(value)}
        className={`${active ? 'bg-delftBlue-700 dark:bg-delftBlue-700 text-white' : 'bg-white hover:bg-gray-100 dark:hover:bg-gray-700'} flex-1 border font-medium rounded-lg text-sm px-5 py-2.5 my-2 mx-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:ring-gray-700`}
    >
        {text}
    </button>
}

export default MenuItem