import {Card} from "flowbite-react";
import TitlePage from "@/components/TitlePage";
import {FaFileAlt, FaUserGraduate} from "react-icons/fa";
import {MdWorkHistory} from "react-icons/md";
import CardResume from "@/pages/Resume/components/CardResume";
import {useEffect, useState} from "react";
import Transition from "@/components/Transition";
import {isMobileDevice} from "@/utils/ResponsiveFunctions";
import MenuItem from "@/pages/Resume/components/MenuItem";
import KnowledgeContent from "@/pages/Resume/components/KnowledgeContent";
import {useSelector} from "react-redux";
import {RootState} from "@/reducers";
import {RootObject} from "@/entities";
import Loader from "@/components/Loader";


const Resume = () => {
    const [knowledge, setKnowLedge] = useState(0)
    const language = useSelector((state: RootState) => state.language.language);


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
                    <h1 className="text-2xl flex items-center gap-3 dark:text-white">
                        <FaUserGraduate className="text-3xl text-delftBlue-300"/>
                        Education
                    </h1>
                    {/*{resume.education.map((el, index) => {*/}
                    {/*    return (*/}
                    {/*        <CardResume side={`${index % 2 == 0 ? 'left' : 'right'}`} key={index}*/}
                    {/*                    h1={el.title} h2={`${el.date_ini} - ${el.date_fin}`} h3={el.school}/>*/}
                    {/*    );*/}
                    {/*})}*/}

                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl flex items-center gap-3 dark:text-white">
                        <MdWorkHistory className="text-3xl text-delftBlue-300"/>
                        Experience
                    </h1>
                    {/*{resume.experience.map((el, index) => {*/}
                    {/*    return (*/}
                    {/*        <CardResume side={`${index % 2 == 0 ? 'right' : 'left'}`} key={index}*/}
                    {/*                    h1={el.role} h2={`${el.date_ini} - ${el.date_fin}`} h3={el.company}/>*/}
                    {/*    );*/}
                    {/*})}*/}
                </div>
            </div>

            <div className="flex flex-wrap mx-2">
                <div className="w-full md:w-1/2 px-2 space-y-5 mb-3">
                    <h1 className="text-2xl font-semibold flex">
                        Working Skills
                    </h1>
                    {/*<KnowledgeContent skills={resume.knowledge[knowledge].skills}/>*/}
                </div>
                <div className="w-full md:w-1/2 px-2 space-y-5">
                    <h1 className="text-2xl font-semibold flex">
                        Knowledge
                    </h1>
                    <div className="flex flex-wrap justify-between w-full">
                        {/*{resume.knowledge.map((el, index) => {*/}
                        {/*    return (*/}
                        {/*        <MenuItem value={el.title} text={el.title} key={index} active={index === knowledge}*/}
                        {/*                  onClick={() => setKnowLedge(index)}/>*/}
                        {/*    );*/}
                        {/*})}*/}
                    </div>

                </div>
            </div>
        </Card>
    </Transition>
}

export default Resume