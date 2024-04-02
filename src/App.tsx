import PersonalInfo from "@/layouts/Personalnfo/PersonalInfo";
import Sidebar from "@/layouts/Sidebar/Sidebar";
import {Flowbite} from "flowbite-react";
import About from "@/pages/About";


function App() {

    return (
        <Flowbite>
            <div
                className="flex flex-col lg:flex-row gap-4 2xl:px-16 pt-[150px] poppins-regular pb-36 lg:pb-0 h-min-screen">
                <div className={`lg:sticky lg:h-[75vh] lg:top-[150px] px-6`}>
                    <PersonalInfo/>
                </div>

                <div className="lg:w-6/12 xl:w-7/12 rounded-3xl px-6">
                    <About/>
                </div>
                <div className="fixed lg:sticky w-full lg:w-auto lg:h-[75vh] bottom-0 lg:top-[25px]">
                    <Sidebar/>
                </div>
            </div>

        </Flowbite>
    )
}

export default App
