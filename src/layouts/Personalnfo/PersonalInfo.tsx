import myImage from "@img/me.jpg";
import {FaCalendarAlt, FaMapMarkerAlt} from "react-icons/fa";
import {IoMailOpenSharp} from "react-icons/io5";
import {Button} from "flowbite-react";
import {HiCloudDownload} from "react-icons/hi";
import {MdOutlinePhoneAndroid} from "react-icons/md";
import Icon from "@/layouts/Personalnfo/components/Icon";
import SocialButtons from "@/layouts/Personalnfo/components/SocialButtons";
import Separator from "@/layouts/Personalnfo/components/Separator";
import useLanguage from "@/hooks/useLanguage";
import ContentItem from "@/layouts/Personalnfo/components/ContentItem";
import {motion} from "framer-motion";
import {
    birthday,
    cvLink,
    locationTitle,
    mailTitle,
    phoneTitle, role
} from "@/layouts/Personalnfo/content/PersonalInfoContent";

const PersonalInfo = () => {
    const language = useLanguage()

    return <>
        <div
            className={`flex flex-col gap-4 items-center justify-center p-4 rounded-3xl bg-white dark:bg-spaceCadet-900`}>
            <div className={`text-center flex flex-col gap-1 items-center`}>
                <img src={myImage} alt="Foto pessoal"
                     className={`rounded-3xl w-[240px] h-[240px] mt-[-110px]`}/>
                <h2 className="poppins-semibold text-xl dark:text-white">Charllys de Lima</h2>
                <h3
                    className={`text-gunmetal-500 dark:text-ghostWhite-700 rounded-lg poppins-light`}>{role[language]}</h3>
            </div>
            <div className={`flex justify-center items-center h-full`}>
                <SocialButtons/>
            </div>
            <div className={`w-full px-4`}>
                <div className={`p-3 w-full rounded-lg bg-gunmetal-100 dark:bg-gunmetal-800 py-5`}>
                    <div className="flex my-2.5 gap-3">
                        <div>
                            <Icon icon={<MdOutlinePhoneAndroid className={'w-10 h-10'}/>}
                                  textColor={`text-[#FF4242] cursor-pointer`}/>
                        </div>
                        <ContentItem title={phoneTitle[language]} value={'+55 84 9 9475 - 3159'}
                                     link={'tel:+5584994753159'}/>
                    </div>
                    <Separator/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<FaMapMarkerAlt className={'w-10 h-10'}/>}
                                  textColor={`text-[#8FD5A6] cursor-pointer`}/>
                        </div>
                        <ContentItem title={locationTitle[language]} value={'Rio de Janeiro - RJ'}/>
                    </div>
                    <Separator/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<IoMailOpenSharp className={'w-10 h-10'}/>}
                                  textColor={`text-delftBlue-300 cursor-pointer`}/>
                        </div>
                        <ContentItem title={mailTitle[language]} value={'charllys.lima@outlook.com'}
                                     link={'mailto:charllys.lima@outlook.com'}/>
                    </div>
                    <Separator/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<FaCalendarAlt className={'w-10 h-10'}/>}
                                  textColor={`text-periwinkle-800 cursor-pointer`}/>
                        </div>
                        <ContentItem title={birthday[language].title} value={birthday[language].value}/>
                    </div>
                </div>
            </div>
            <div className={`text-center flex flex-col items-center`}>
                <motion.div
                    initial={{scale: 1}}
                    animate={{scale: [1, 1.025, 1]}}
                    transition={{duration: 0.8, repeat: Infinity}}
                >
                    <a href={cvLink[language]} download={'CV.pdf'}>
                        <Button size={`lg`}
                                className={`bg-delftBlue-500 dark:bg-delftBlue-600 hover:bg-delftBlue-1000 dark:hover:bg-delftBlue-700 border-0`}>
                            <HiCloudDownload className="mr-2 h-5 w-5"/>
                            Download CV
                        </Button>
                    </a>
                </motion.div>
            </div>
        </div>
    </>
}

export default PersonalInfo