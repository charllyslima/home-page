import {Card} from "flowbite-react";
import TitlePage from "@/components/TitlePage";
import {TiContacts} from "react-icons/ti";

const Contact = () => {
    return <Card className="rounded-3xl p-10 dark:text-white">
        <TitlePage title={'Contact'} icon={<TiContacts className={`me-3 text-4xl text-air-force-blue`}/>}/>
    </Card>
}

export default Contact