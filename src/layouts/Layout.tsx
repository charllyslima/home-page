import PersonalInfo from "@/components/PersonalInfo";
import Sidebar from "@/components/Sidebar";
import {Flowbite} from "flowbite-react";
import React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => (
    <>
        <Flowbite>
            <div
                className="flex flex-col lg:flex-row gap-4 2xl:px-16 pt-[150px] poppins-regular pb-36 lg:pb-0 h-min-screen">
                <div className={`lg:sticky lg:h-[75vh] lg:top-[150px] px-6`}>
                    <PersonalInfo/>
                </div>
                <main className="lg:w-6/12 xl:w-7/12 rounded-3xl px-6">{children}</main>
                <div className="fixed lg:sticky w-full lg:w-auto lg:h-[75vh] bottom-0 lg:top-[25px]">
                    <Sidebar/>
                </div>
            </div>
        </Flowbite>

    </>
);

export default Layout;
