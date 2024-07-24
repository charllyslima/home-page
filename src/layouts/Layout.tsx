import PersonalInfo from "@/layouts/Personalnfo/PersonalInfo";
import Sidebar from "@/layouts/Sidebar/Sidebar";
import {Flowbite} from "flowbite-react";
import React from "react";
import TitlePage from "@/components/TitlePage";
import {LanguageMap, Languages} from "@/constants/Languages";
import useLanguage from "@/hooks/useLanguage";
import {ListRoutes, resumeLang, worksLang} from "@/constants/ListRoutes";
import {useLocation} from "react-router-dom";
import {motion} from "framer-motion"

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
    const language = useLanguage()
    const location = useLocation();
    const routeTitles: { [key: string]: LanguageMap<string> } = {
        [ListRoutes.ABOUT]: {
            [Languages.ENGLISH]: 'About Me',
            [Languages.PORTUGUESE_BRAZILIAN]: 'Sobre Mim',
            [Languages.SPANISH]: 'Acerca de Mí',
        },
        [ListRoutes.RESUME]: resumeLang,
        [ListRoutes.WORKS]: worksLang,
        [ListRoutes.CONTACT]: {
            [Languages.ENGLISH]: 'Contact',
            [Languages.PORTUGUESE_BRAZILIAN]: 'Contato',
            [Languages.SPANISH]: 'Contacto',
        },
        [ListRoutes.DEFAULT]: {
            [Languages.ENGLISH]: 'About Me',
            [Languages.PORTUGUESE_BRAZILIAN]: 'Sobre Mim',
            [Languages.SPANISH]: 'Acerca de Mí',
        },
    };
    const copyright: { [key in Languages]: string } = {
        [Languages.ENGLISH]: 'All Rights Reserved by',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Todos os direitos reservados por',
        [Languages.SPANISH]: 'Todos los derechos reservados por',
    };

    const currentPath = location.pathname.replace(ListRoutes.BASE_NAME, '/');

    const pageTitle = routeTitles[currentPath]?.[language] || "Default Title";
    return (
        <>
            <Flowbite>
                <div
                    className="flex flex-col lg:flex-row gap-4 2xl:px-16 pt-[110px] poppins-regular md:pb-48 lg:pb-0 h-min-screen">
                    <aside className="lg:sticky lg:h-[75vh] lg:top-[110px] px-6">
                        <PersonalInfo/>
                    </aside>
                    <main className="lg:w-7/12 rounded-3xl px-6 sm:pb-20 md:pb-32 sm:mb-20 md:mb-0">

                        <div className="border-0 rounded-3xl dark:text-white bg-white dark:bg-spaceCadet-900">
                            <header className={`px-10 pt-10`}>
                                <TitlePage title={pageTitle}/>
                            </header>
                            {children}
                            <footer
                                className="p-8 bg-ghostWhite-500 dark:bg-gunmetal-700 rounded-bl-3xl rounded-b-3xl">
                                <p className="text-center text-gunmetal-400">
                                    © 2024 {copyright[language]} <strong>Charllys de Lima</strong>
                                </p>
                            </footer>
                        </div>

                    </main>
                    <aside className="fixed xl:sticky w-full xl:w-auto xl:h-[75vh] bottom-0 xl:top-[25px] bg-">
                        <Sidebar/>
                    </aside>
                </div>
            </Flowbite>


        </>
    )
};

export default Layout;
