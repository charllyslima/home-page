import {Card} from "flowbite-react";
import TitlePage from "@/components/TitlePage";
import {FaFileAlt, FaUserGraduate} from "react-icons/fa";
import {MdWorkHistory} from "react-icons/md";
import CardResume from "@/pages/Resume/components/CardResume";

const Resume = () => {
    return <Card className="rounded-3xl p-10 dark:text-white">
        <TitlePage title={'Resume'} icon={<FaFileAlt className={`me-3 text-4xl text-air-force-blue`}/>}/>

        <div className="flex flex-wrap mx-2 mb-10">
            <div className="lg:w-1/2 px-2 space-y-5">
                <h1 className="text-2xl font-semibold flex">
                    <FaUserGraduate className={`me-3 text-3xl text-ash-gray`}/>
                    Education
                </h1>
                <CardResume side={'left'} h1={`Postgraduate degree, IT Governance`} h2={`2023 - 2024`} h3={`GRAN`}/>
                <CardResume side={'right'} h1={`Postgraduate degree, Big Data`} h2={`2021 - 2022`}
                            h3={`Descomplica Faculdade Digital`}/>
                <CardResume side={'left'} h1={`Postgraduate degree, SI Projects`} h2={`2021 - 2022`}
                            h3={`Descomplica Faculdade Digital`}/>
                <CardResume side={'right'} h1={`Bachelor's degree, Information Systems`} h2={`2017 - 2020`}
                            h3={`Universidade Potiguar`}/>
                <CardResume side={'left'} h1={`Technician Degree, Big Data`} h2={`2016 - 2018`} h3={`SENAI/RN`}/>
            </div>
            <div className="lg:w-1/2 px-2 space-y-5">
                <h1 className="text-2xl font-semibold flex">
                    <MdWorkHistory className={`me-3 text-3xl text-ash-gray`}/>
                    Experience
                </h1>
                <CardResume side={'right'} h1={`Full Stack Developer`} h2={`2022 - Present`}
                            h3={`GRAN`}/>
                <CardResume side={'left'} h1={`Full Stack Developer`} h2={`2022 - 2022`}
                            h3={`BRQ Digital Solutions`}/>
                <CardResume side={'right'} h1={`Back End Developer`} h2={`2021 - 2022`}
                            h3={`Wipro`}/>
                <CardResume side={'left'} h1={`Full Stack Developer`} h2={`2018 - 2021`}
                            h3={`Inovall`}/>
            </div>
        </div>
        <div className="flex flex-wrap mx-2">
            <div className="w-full md:w-1/2 px-2 space-y-5">
                <h1 className="text-2xl font-semibold flex">
                    Working Skills
                </h1>
            </div>
            <div className="w-full md:w-1/2 px-2 space-y-5">
                <h1 className="text-2xl font-semibold flex">
                    Knowledges
                </h1>
            </div>
        </div>
    </Card>
}

export default Resume