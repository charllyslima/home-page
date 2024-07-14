import myImage from "@img/me.webp";
import {FaCalendarAlt, FaMapMarkerAlt} from "react-icons/fa";
import {IoMailOpenSharp} from "react-icons/io5";
import {Button, Card} from "flowbite-react";
import {HiCloudDownload} from "react-icons/hi";
import {MdOutlinePhoneAndroid} from "react-icons/md";
import Icon from "@/layouts/Personalnfo/components/Icon";
import SocialButtons from "@/layouts/Personalnfo/components/SocialButtons";
import Separator from "@/layouts/Personalnfo/components/Separator";
import {LanguageMap, Languages} from "@/constants/languages";
import useLanguage from "@/hooks/useLanguage";

const PersonalInfo = () => {
    const language = useLanguage()
    const role: LanguageMap<string> = {
        [Languages.ENGLISH]: 'Systems Analyst',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Analista de Sistemas',
        [Languages.SPANISH]: 'Analista de Sistemas',
    };
    const birthday: LanguageMap<string> = {
        [Languages.ENGLISH]: 'September 8, 1995',
        [Languages.PORTUGUESE_BRAZILIAN]: '08 September 1995',
        [Languages.SPANISH]: '08 Septiembre 1995',
    };
    return <>
        <Card className={`flex flex-col gap-4 items-center justify-center p-4 rounded-3xl`}>
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
                <div className={`p-3 w-full rounded-lg bg-gunmetal-100 dark:bg-gunmetal-900 py-5`}>
                    <div className="flex my-2.5 gap-3">
                        <div>
                            <Icon icon={<MdOutlinePhoneAndroid className={'w-10 h-10'}/>}
                                  textColor={`text-[#FF4242] cursor-pointer`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Phone</span>
                            <p className={`font-base text-base dark:text-white`}>+55 84 9 9475 - 3159</p>
                        </div>
                    </div>
                    <Separator/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<IoMailOpenSharp className={'w-10 h-10'}/>}
                                  textColor={`text-delftBlue-300 cursor-pointer`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Email</span>
                            <a href="mailto:charllys.lima@outlook.com">
                                <p className={`font-base text-base break-words dark:text-white`}>charllys.lima@outlook.com</p>
                            </a>
                        </div>
                    </div>
                    <Separator/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<FaMapMarkerAlt className={'w-10 h-10'}/>}
                                  textColor={`text-[#8FD5A6] cursor-pointer`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Location</span>
                            <p className={`text-base break-words dark:text-white`}>Rio de Janeiro - RJ</p>
                        </div>
                    </div>
                    <Separator/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<FaCalendarAlt className={'w-10 h-10'}/>}
                                  textColor={`text-periwinkle-800 cursor-pointer`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Birthday</span>
                            <p className={`text-base break-words dark:text-white`}>{birthday[language]}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-center flex flex-col items-center`}>
                <a href={`#`}>
                    <Button size={`lg`}
                            className={`bg-delftBlue-500 dark:bg-delftBlue-600 hover:bg-delftBlue-1000 dark:hover:bg-delftBlue-700 border-0`}>
                        <HiCloudDownload className="mr-2 h-5 w-5"/>
                        Download CV
                    </Button>
                </a>
            </div>
        </Card>
    </>
}

export default PersonalInfo