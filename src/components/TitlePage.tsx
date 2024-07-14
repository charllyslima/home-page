import {ReactElement} from "react";

interface IProps {
    title: string;
    icon: ReactElement;
}

const TitlePage = (props: IProps) => {
    return (
        <>
            <h1 className="montserrat-bold mb-4 text-4xl text-gray-900 dark:text-white">
            <span className="flex items-center relative w-full">
          {props.title}
            <span
                className="flex-grow relative ml-4 after:content-[''] after:absolute after:top-1/2 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-br after:from-periwinkle-500 after:to-delftBlue-500 after:rounded after:transform after:-translate-y-1/2"></span>
        </span>
            </h1>
        </>
    );
};

export default TitlePage;
