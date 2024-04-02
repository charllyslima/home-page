import {ReactElement} from "react";


interface IProps {
    title: string
    icon: ReactElement
}

const TitlePage = (props: IProps) => {
    return <>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-air-force-blue from-midnight-green">
                {props.title}
            </span>
        </h1>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
    </>
}

export default TitlePage