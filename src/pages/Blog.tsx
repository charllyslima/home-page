import {Card} from "flowbite-react";
import TitlePage from "@/components/TitlePage";
import {FaBlogger} from "react-icons/fa";

const Blog = () => {
    return <Card className="rounded-3xl p-10 dark:text-white">
        <TitlePage title={'Blog'} icon={<FaBlogger className={`me-3 text-4xl text-air-force-blue`}/>}/>

    </Card>
}

export default Blog