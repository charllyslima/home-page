import {Card} from "flowbite-react";
import TitlePage from "@/components/TitlePage";
import {MdWork} from "react-icons/md";

const Works = () => {
    return <Card className="rounded-3xl p-10 dark:text-white">
        <TitlePage title={'Works'} icon={<MdWork className={`me-3 text-4xl text-air-force-blue`}/>}/>
    </Card>
}

export default Works