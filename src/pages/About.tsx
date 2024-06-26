import TitlePage from "@/components/TitlePage";
import {Card} from "flowbite-react";
import {FaCode, FaUserAlt} from "react-icons/fa";
import {MdBiotech, MdLeaderboard, MdOutlineSystemSecurityUpdateGood} from "react-icons/md";
import {useEffect} from "react";
import Transition from "@/components/Transition";
import {isMobileDevice} from "@/utils/ResponsiveFunctions";

const About = () => {

    useEffect(() => {
        if (isMobileDevice()) {
            const element = document.getElementById('resume');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, []);

    return <Transition>
        <Card className="rounded-3xl p-10 dark:text-white" id={`about`}>
            <TitlePage title={'About'} icon={<FaUserAlt className={`me-3 text-4xl text-air-force-blue`}/>}/>
            <p className={`dark:text-silver`}>
                Hello, I&apos;m Charllys de Lima, a full-stack developer and systems analyst with over seven
                years of experience in creating robust and dynamic solutions using a wide range of
                technologies, including PHP, React, C#, SQLServer, and more. Currently, I work at GRAN, an
                online education company, where I lead the development of a new integrated system that
                unifies all the organization&apos;s platforms. My goal is to promote efficiency and data
                synchronization across different areas, leveraging my expertise in PHP and React.
            </p>
            <p className={`dark:text-silver`}>
                My passion for technology and innovation has always driven me to seek new knowledge and
                challenges. I hold a bachelor&apos;s degree in Information Systems and have three
                postgraduate
                degrees in related fields: Big Data, Information Systems Project Design, and IT Governance.
                One of my proudest achievements was leading a project for SEBRAE-PB, the LEAN SEBRAE, where
                I applied my technical expertise and leadership and collaboration skills to achieve the
                project&apos;s goals. I&apos;m always on the lookout for innovative technologies and
                approaches that
                can improve how we develop solutions.
            </p>
            <h1 className={`text-3xl font-bold dark:text-white`}>What I Do!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Card className="max-w-md p-3 dark:bg-eerie-black" horizontal>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                        <FaCode className="me-3 size-16 xl:size-10 text-cyan-600"/> Web Development & Design
                    </h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Specializing in crafting high-performance websites and applications using modern
                        frameworks and languages. My toolkit includes PHP, React, Vue.js, Laravel, and
                        Tailwind CSS, focused on creating seamless, responsive, and visually appealing
                        digital experiences.
                    </p>
                </Card>
                <Card className="max-w-md p-3 dark:bg-eerie-black" horizontal>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                        <MdOutlineSystemSecurityUpdateGood className="me-3 size-16 xl:size-10 text-cyan-600"/>
                        System Integration & Optimization
                    </h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Expert in integrating diverse systems and optimizing web applications for maximum
                        efficiency and scalability. My approach ensures data coherence and streamlined
                        operations across platforms, emphasizing user-centric design.
                    </p>
                </Card>
                <Card className="max-w-md p-3 dark:bg-eerie-black" horizontal>
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                        <MdBiotech className="me-3 size-16 xl:size-10 text-amber-400"/> Innovative Solutions
                    </h1>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        Passionate about leveraging emerging technologies to develop innovative web-based
                        solutions that address complex challenges, enhance user engagement, and improve
                        overall digital presence.
                    </p>
                </Card>
                <Card className="max-w-md p-3 dark:bg-eerie-black" horizontal>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                    <MdLeaderboard className="me-3 size-16 xl:size-10 text-purple-500"/> Leadership in Technology
                    Projects
                </h1>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    A proven track record of leading and collaborating on technology projects, such as the
                    LEAN SEBRAE initiative, where my blend of technical skills and project management
                    facilitated the achievement of strategic goals.
                </p>
            </Card>
            </div>
        </Card>
    </Transition>
}

export default About