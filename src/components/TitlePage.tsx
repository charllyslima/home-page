import {FaRegUser} from "react-icons/fa";


interface IProps {
    title: string
}

const TitlePage = (props: IProps) => {
    return <>
        <h2 className={`flex items-center text-4xl font-extrabold`}>
            <FaRegUser className={`me-3 text-4xl text-ruddy-blue`}/>
            {props.title}
        </h2>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700"/>
    </>
}

export default TitlePage