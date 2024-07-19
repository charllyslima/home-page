import React, {ReactElement} from "react";

interface IIconProps {
    textColor: string
    icon: ReactElement
}


const Icon: React.FC<IIconProps> = ({icon, textColor}) => {
    return <div
        className={`bg-white dark:bg-black p-3 rounded-lg w-[50px] h-[50px] flex content-center items-center shadow-lg ${textColor} hover:text-anti-flash-white hover:bg-delftBlue-200 dark:hover:bg-delftBlue-200  duration-300 transition`}>
        {icon}
    </div>
}

export default Icon