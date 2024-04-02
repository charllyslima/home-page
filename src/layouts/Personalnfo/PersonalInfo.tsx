import myImage from "@img/me.webp";
import {FaFacebookF, FaGithub, FaLinkedinIn, FaMapMarkerAlt} from "react-icons/fa";
import {IoMailOpenSharp} from "react-icons/io5";
import {Button, Card} from "flowbite-react";
import {HiCloudDownload} from "react-icons/hi";
import {MdOutlinePhoneAndroid} from "react-icons/md";
import Icon from "@/layouts/Personalnfo/components/Icon";
import SocialButtons from "@/layouts/Personalnfo/components/SocialButtons";

const PersonalInfo = () => {
    return <>
        <Card className={`flex flex-col gap-4 items-center justify-center p-4 rounded-3xl`}>
            <div className={`text-center flex flex-col gap-4 items-center`}>
                <img src={myImage} alt="Foto pessoal"
                     className={`rounded-3xl w-[240px] h-[240px] mt-[-140px]`}/>
                <h4 className="font-bold text-2xl dark:text-white">Charllys de Lima</h4>
                <span
                    className={`bg-anti-flash-white dark:bg-eerie-black dark:text-silver p-2 rounded-lg font-semibold w-48`}>Full-Stack Developer</span>
            </div>
            <div className={`flex justify-center items-center h-full`}>
                <SocialButtons/>
            </div>
            <div className={`w-full px-4`}>
                <div className={`p-3 w-full bg-anti-flash-white dark:bg-eerie-black rounded-lg`}>
                    <div className="flex my-2.5 gap-3">
                        <div>
                            <Icon icon={<MdOutlinePhoneAndroid className={'w-10 h-10'}/>} textColor={`text-[#FF4242]`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Phone</span>
                            <p className={`font-base text-base dark:text-white`}>+55 84 9 9475 - 3159</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<IoMailOpenSharp className={'w-10 h-10'}/>} textColor={`text-[#6F58C9]`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Email</span>
                            <a href="mailto:charllys.lima@outlook.com">
                                <p className={`font-base text-base break-words dark:text-white`}>charllys.lima@outlook.com</p>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <Icon icon={<FaMapMarkerAlt className={'w-10 h-10'}/>} textColor={`text-[#8FD5A6]`}/>
                        </div>
                        <div className={'w-10/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Location</span>
                            <p className={`text-base break-words dark:text-white`}>Rio Grande do Norte, Brazil</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-center flex flex-col items-center`}>
                <Button size={`lg`} className={`bg-[#44799C] hover:bg-[#6096BA] dark:bg-[#44799C] dark:hover:bg-[#6096BA]`} href={`#`}>
                    <HiCloudDownload className="mr-2 h-5 w-5"/>
                    Download CV
                </Button>
            </div>
        </Card>
    </>
}

export default PersonalInfo