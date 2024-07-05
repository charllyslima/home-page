import TitlePage from "@/components/TitlePage";
import {Card} from "flowbite-react";
import {FaUserAlt} from "react-icons/fa";
import {MdBiotech, MdLeaderboard} from "react-icons/md";
import {useEffect} from "react";
import Transition from "@/components/Transition";
import {isMobileDevice} from "@/utils/ResponsiveFunctions";
import {RootState} from "@/reducers";
import {useSelector} from "react-redux";
import {RootObject} from "@/entities";
import Loader from "@/components/Loader";
import IconLoader from "@/components/Icon";

const About = () => {
    const jsonData = useSelector<RootState, RootObject | null>((state) => state.json.data);

    useEffect(() => {
        if (jsonData && isMobileDevice()) {
            const element = document.getElementById('resume');
            if (element) {
                element.scrollIntoView({behavior: 'smooth'});
            }
        }
    }, [jsonData]);

    if (!jsonData) {
        return <Transition>
            <Loader/>
        </Transition>;
    }

    const {about} = jsonData.pt;
    if (!jsonData) {
        return <div>Loading...</div>;
    }
    return <Transition>
        <Card className="rounded-3xl p-10 dark:text-white" id={`about`}>
            <TitlePage title={'About'} icon={<FaUserAlt className={`me-3 text-4xl text-air-force-blue`}/>}/>
            <p className={`dark:text-silver text-gunmetal-500`}>
                {about.description}
            </p>
            <h1 className={`text-3xl poppins-semibold dark:text-white`}>What I Do!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {about.what_i_do.map((el, index) => {
                    return (
                        <Card key={index} className="max-w-md p-3 justify-start" style={{backgroundColor: el.icon.color + '12'}} horizontal>
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center">
                                <IconLoader color={el.icon.color} iconName={el.icon.name}/>
                                {el.title}
                            </h1>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {el.description}
                            </p>
                        </Card>
                    );
                })}
            </div>
        </Card>
    </Transition>
}

export default About