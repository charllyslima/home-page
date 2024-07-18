import {FaUserGraduate} from "react-icons/fa";
import {MdWorkHistory} from "react-icons/md";
import CardResume from "@/pages/Resume/components/CardResume";
import {useEffect, useState} from "react";
import {isMobileDevice} from "@/utils/ResponsiveFunctions";
import MenuItem from "@/pages/Resume/components/MenuItem";
import KnowledgeContent from "@/pages/Resume/components/KnowledgeContent";
import {useSelector} from "react-redux";
import {RootState} from "@/reducers";
import {education, experience, knowledge, titleEducation, titleExperience} from "@/pages/Resume/content/ResumeContent";


const Resume = () => {
    const [knowledgeSkill, setKnowLedgeSkill] = useState(0)
    const language = useSelector((state: RootState) => state.language.language);

    useEffect(() => {
        if (isMobileDevice()) {
            const element = document.getElementById('resume');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, []);

    return <div className="" id={`resume`}>
        <div className="p-10">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-2 mb-10">
                <div className="space-y-5">
                    <h1 className="text-2xl flex items-center gap-3 dark:text-white">
                        <FaUserGraduate className="text-3xl text-delftBlue-300"/>
                        {titleEducation[language]}
                    </h1>
                    {education[language].map((el, index) => {
                        return (
                            <CardResume side={`${index % 2 == 0 ? 'left' : 'right'}`} key={index}
                                        h1={el.title} h2={`${el.date_ini} - ${el.date_fin}`} h3={el.school}
                                        star={el.star}/>
                        );
                    })}

                </div>
                <div className="space-y-5">
                    <h1 className="text-2xl flex items-center gap-3 dark:text-white">
                        <MdWorkHistory className="text-3xl text-delftBlue-300"/>
                        {titleExperience[language]}
                    </h1>
                    {experience[language].map((el, index) => {
                        return (
                            <CardResume side={`${index % 2 == 0 ? 'right' : 'left'}`} key={index}
                                        h1={el.role} h2={`${el.date_ini} - ${el.date_fin}`} h3={el.company}/>
                        );
                    })}
                </div>
            </div>
        </div>
        <div className={`bg-ghostWhite-500 dark:bg-gunmetal-700 w-full p-10`}>
            <div className="flex flex-wrap mx-2">
                <div className="w-full md:w-1/2 px-2 space-y-5 mb-3">
                    <h1 className="text-2xl font-semibold flex">
                        Working Skills
                    </h1>
                    <KnowledgeContent knowledgeSkill={knowledgeSkill}/>
                </div>
                <div className="w-full md:w-1/2 px-2 space-y-5">
                    <h1 className="text-2xl font-semibold flex">
                        Knowledge
                    </h1>
                    <div className="flex flex-wrap justify-between w-full">
                        {knowledge[language].map((el) => {
                            return (
                                <MenuItem value={el.title} text={el.title} key={el.key}
                                          active={el.key === knowledgeSkill}
                                          onClick={() => setKnowLedgeSkill(el.key)}/>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    </div>
}

export default Resume