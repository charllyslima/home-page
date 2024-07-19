import {FaFileAlt, FaUserAlt} from "react-icons/fa";
import {MdWork} from "react-icons/md";
import SidebarItem from "@/layouts/Sidebar/components/SidebarItem";
import {DarkThemeToggle} from "flowbite-react";
import {RiContactsBook2Fill} from "react-icons/ri";
import LanguageSelector from "@/layouts/Sidebar/components/LanguageSelector";
import useLanguage from "@/hooks/useLanguage";
import {aboutLang, contactLang, resumeLang, ListRoutes, worksLang} from "@/constants/ListRoutes";

const Sidebar = () => {
    const language = useLanguage()

    return <div className="xl:rounded-3xl sm:rounded-none lg:h-auto lg:min-w-[156px] bg-white dark:bg-spaceCadet-900">
        <nav className="p-1 md:p-5">
            <ul className={`xl:space-y-3 sm:space-x-3 xl:space-x-0 flex xl:flex-col sm:justify-between`}>
                <SidebarItem href={ListRoutes.DEFAULT} icon={<FaUserAlt className={`text-2xl`}/>}
                             text={aboutLang[language]}/>
                <SidebarItem href={ListRoutes.RESUME} icon={<FaFileAlt className={`text-2xl`}/>}
                             text={resumeLang[language]}/>
                <SidebarItem href={ListRoutes.WORKS} icon={<MdWork className={`text-2xl`}/>}
                             text={worksLang[language]}/>
                <SidebarItem href={ListRoutes.CONTACT} icon={<RiContactsBook2Fill className={`text-2xl`}/>}
                             text={contactLang[language]}/>
                <li className="text-center flex space-x-2 justify-center items-center bg-transparent">
                    <DarkThemeToggle
                        className={'w-[40px] hover:bg-delftBlue-600 hover:dark:bg-delftBlue-600 bg-periwinkle-100 dark:bg-gunmetal-700 hover:text-white rounded-full shadow-lg duration-300 transition'}/>
                    <LanguageSelector
                        className={'w-[40px] hover:bg-delftBlue-600 hover:dark:bg-delftBlue-600 bg-periwinkle-100 dark:bg-gunmetal-700 hover:text-white rounded-full shadow-lg duration-300 transition'}/>
                </li>
            </ul>
        </nav>
    </div>
}

export default Sidebar