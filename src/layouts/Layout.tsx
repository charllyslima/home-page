import PersonalInfo from "@/layouts/Personalnfo/PersonalInfo";
import Sidebar from "@/layouts/Sidebar/Sidebar";
import {Flowbite} from "flowbite-react";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => (
    <>
        <Flowbite>
            <div
                className="flex flex-col lg:flex-row gap-4 2xl:px-16 pt-[110px] poppins-regular md:pb-48 lg:pb-0 h-min-screen">
                <div className={`lg:sticky lg:h-[75vh] lg:top-[110px] px-6`}>
                    <PersonalInfo/>
                </div>
                <main className="lg:w-7/12 rounded-3xl px-6 mb-24 md:mb-32 lg:mb-6">{children}</main>
                <div className="fixed xl:sticky w-full xl:w-auto xl:h-[75vh] bottom-0 xl:top-[25px]">
                    <Sidebar/>
                </div>
            </div>
        </Flowbite>

    </>
);

export default Layout;
