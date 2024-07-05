import myImage from "@img/me.webp";
import {FaCalendarAlt, FaFacebookF, FaGithub, FaLinkedinIn, FaMapMarkerAlt} from "react-icons/fa";
import {IoMailOpenSharp} from "react-icons/io5";
import {Button, Card} from "flowbite-react";
import {HiCloudDownload} from "react-icons/hi";
import {MdOutlinePhoneAndroid} from "react-icons/md";
import Icon from "@/layouts/Personalnfo/components/Icon";
import SocialButtons from "@/layouts/Personalnfo/components/SocialButtons";
import {useSelector} from "react-redux";
import {RootState} from "@/reducers";
import {RootObject} from "@/entities";
import Transition from "@/components/Transition";
import Loader from "@/components/Loader";
import Separator from "@/layouts/Personalnfo/components/Separator";

const PersonalInfo = () => {
    const jsonData = useSelector<RootState, RootObject | null>((state) => state.json.data);
    if (!jsonData) {
        return <Transition>
            <Loader/>
        </Transition>;
    }
    const personalInfo = jsonData.pt.personal_information
    return <>
        <Card className={`flex flex-col gap-4 items-center justify-center p-4 rounded-3xl`}>
            <div className={`text-center flex flex-col gap-1 items-center`}>
                <img src={myImage} alt="Foto pessoal"
                     className={`rounded-3xl w-[240px] h-[240px] mt-[-110px]`}/>
                <h2 className="poppins-semibold text-xl dark:text-white">{personalInfo.name}</h2>
                <h3
                    className={`text-gunmetal-500 dark:text-ghostWhite-700 rounded-lg poppins-light`}>{personalInfo.role}</h3>
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
                            <p className={`font-base text-base dark:text-white`}>{personalInfo.phone_number}</p>
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
                                <p className={`font-base text-base break-words dark:text-white`}>{personalInfo.email}</p>
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
                            <p className={`text-base break-words dark:text-white`}>{personalInfo.location}</p>
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
                            <p className={`text-base break-words dark:text-white`}>{personalInfo.birthday}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-center flex flex-col items-center`}>
                <a href={personalInfo.link_cv}>
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