import {FaBlogger, FaFileAlt, FaUserAlt} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import SidebarItem from "@/layouts/Sidebar/components/SidebarItem";
import {Card, DarkThemeToggle} from "flowbite-react";
import {RiContactsBook2Fill} from "react-icons/ri";

const sidebar = () => {


    return <Card className="xl:rounded-3xl lg:h-auto">
        <nav className="p-1 md:p-5">
            <ul className={`xl:space-y-3 sm:space-x-3 xl:space-x-0 flex xl:flex-col sm:justify-between`}>
                <SidebarItem href='/' icon={<FaUserAlt className={`text-2xl`}/>} text={'About'}/>
                <SidebarItem href='/resume' icon={<FaFileAlt className={`text-2xl`}/>} text={'Resume'}/>
                <SidebarItem href='/works' icon={<MdWork className={`text-2xl`}/>} text={'Works'}/>
                <SidebarItem href='/blog' icon={<FaBlogger className={`text-2xl`}/>} text={'Blog'}/>
                <SidebarItem href='/contact' icon={<RiContactsBook2Fill className={`text-2xl`}/>} text={'Contact'}/>
                <li className="text-center rounded-lg shadow-lg">
                    <DarkThemeToggle
                        className={'w-full h-full flex justify-center items-center dark:bg-eerie-black hover:bg-midnight-green dark:hover:bg-midnight-green hover:text-white'}/>
                </li>

            </ul>
        </nav>
    </Card>
}

export default sidebar