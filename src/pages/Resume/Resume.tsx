import {Card} from "flowbite-react";
import TitlePage from "@/components/TitlePage";
import {FaFileAlt, FaUserGraduate} from "react-icons/fa";
import {MdWorkHistory} from "react-icons/md";
import CardResume from "@/pages/Resume/components/CardResume";
import {useEffect, useState} from "react";
import Transition from "@/components/Transition";
import {isMobileDevice} from "@/utils/ResponsiveFunctions";
import MenuItem from "@/pages/Resume/components/menu/MenuItem";
import KnowledgeContent from "@/pages/Resume/components/KnowledgeContent";


const Resume = () => {

    const [knowledge, setKnowLedge] = useState('web-development')

    useEffect(() => {
        if (isMobileDevice()) {
            const element = document.getElementById('resume');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    return <Transition>
        <Card className="rounded-3xl p-10 dark:text-white" id={`resume`}>
            <TitlePage title={'Resume'} icon={<FaFileAlt className={`me-3 text-4xl text-air-force-blue`}/>}/>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 mb-10">
                <div className="space-y-5">
                    <h1 className="text-2xl font-semibold flex items-center gap-3">
                        <FaUserGraduate className="text-3xl"/>
                        Education
                    </h1>
                    <CardResume side="left" h1="Postgraduate degree, IT Governance" h2="2023 - 2024" h3="GRAN"/>
                    <CardResume side="right" h1="Postgraduate degree, Big Data" h2="2021 - 2022"
                                h3="Descomplica Faculdade Digital"/>
                    <CardResume side="left" h1="Postgraduate degree, SI Projects" h2="2021 - 2022"
                                h3="Descomplica Faculdade Digital"/>
                    <CardResume side="right" h1="Bachelor's degree, Information Systems" h2="2017 - 2020"
                                h3="Universidade Potiguar"/>
                    <CardResume side="left" h1="Technician Degree, Big Data" h2="2016 - 2018" h3="SENAI/RN"/>
                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl font-semibold flex items-center gap-3">
                        <MdWorkHistory className="text-3xl"/>
                        Experience
                    </h1>
                    <CardResume side="right" h1="Full Stack Developer" h2="2022 - Present" h3="GRAN"/>
                    <CardResume side="left" h1="Full Stack Developer" h2="2022 - 2022" h3="BRQ Digital Solutions"/>
                    <CardResume side="right" h1="Back End Developer" h2="2021 - 2022" h3="Wipro"/>
                    <CardResume side="left" h1="Full Stack Developer" h2="2018 - 2021" h3="Inovall"/>
                </div>
            </div>

            <div className="flex flex-wrap mx-2">
                <div className="w-full md:w-1/2 px-2 space-y-5 mb-3">
                    <h1 className="text-2xl font-semibold flex">
                        Working Skills
                    </h1>
                    <KnowledgeContent knowledge={knowledge}/>
                </div>
                <div className="w-full md:w-1/2 px-2 space-y-5">
                    <h1 className="text-2xl font-semibold flex">
                        Knowledge
                    </h1>
                    <div className="flex flex-wrap justify-between w-full">
                        <MenuItem value={`web-development`} text={`Web Development`}
                                  onClick={() => setKnowLedge(`web-development`)}/>
                        <MenuItem value={`database`} text={`Database`} onClick={() => setKnowLedge(`database`)}/>
                        <MenuItem value={`frontend`} text={`FrontEnd`} onClick={() => setKnowLedge(`frontend`)}/>
                        <MenuItem value={`backend`} text={`Backend`} onClick={() => setKnowLedge(`backend`)}/>
                        <MenuItem value={`devops`} text={`Devops`} onClick={() => setKnowLedge(`devops`)}/>
                        <MenuItem value={`mobile`} text={`Mobile`} onClick={() => setKnowLedge(`mobile`)}/>
                    </div>

                </div>
            </div>
        </Card>
    </Transition>
}

export default Resume