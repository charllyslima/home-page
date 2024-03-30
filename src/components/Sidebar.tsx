import {FaBlogger, FaFileAlt, FaRegUser} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import {TiContacts} from "react-icons/ti";
import SidebarItem from "@/components/SidebarItem";
import {Card, DarkThemeToggle} from "flowbite-react";

const sidebar = () => {



    return <Card className="lg:rounded-3xl">
        <nav className="p-1 md:p-5">
            <ul className={`lg:space-y-3 sm:space-x-3 lg:space-x-0 flex lg:flex-col sm:justify-between`}>
                <SidebarItem href='/' icon={<FaRegUser className={`text-2xl`}/>} text={'About'}/>
                <SidebarItem href='resume' icon={<FaFileAlt className={`text-2xl`}/>} text={'Resume'}/>
                <SidebarItem href='works' icon={<MdWork className={`text-2xl`}/>} text={'Works'}/>
                <SidebarItem href='blog' icon={<FaBlogger className={`text-2xl`}/>} text={'Blog'}/>
                <SidebarItem href='contact' icon={<TiContacts className={`text-2xl`}/>} text={'Contact'}/>
                <li
                    className="p-1 md:p-3 flex items-center rounded-lg shadow-lg bg-anti-flash-white">
                    <DarkThemeToggle />
                </li>

            </ul>
        </nav>
    </Card>
}

export default sidebar