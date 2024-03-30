import myImage from "@img/me.webp";
import {FaFacebookF, FaGithub, FaLinkedinIn, FaMapMarkerAlt} from "react-icons/fa";
import {IoIosPhonePortrait} from "react-icons/io";
import {IoMailOpenSharp} from "react-icons/io5";
import {Button, Card} from "flowbite-react";
import {HiCloudDownload} from "react-icons/hi";

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
                <ul className={`flex gap-4 items-center`}>
                    <li>
                        <a href="#"
                           className="shadow-lg bg-anti-flash-white dark:bg-eerie-black hover:text-anti-flash-white hover:bg-brandeis-blue text-brandeis-blue h-10 w-10 flex justify-center items-center rounded-lg">
                            <FaFacebookF/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="shadow-lg bg-anti-flash-white dark:bg-eerie-black hover:text-anti-flash-white hover:bg-brandeis-blue text-indigo-dye h-10 w-10 flex justify-center items-center rounded-lg">
                            <FaLinkedinIn/>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="shadow-lg bg-anti-flash-white dark:bg-eerie-black hover:text-anti-flash-white hover:bg-brandeis-blue text-black h-10 w-10 flex justify-center items-center rounded-lg">
                            <FaGithub/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={`w-full px-4`}>
                <div className={`p-3 w-full bg-anti-flash-white dark:bg-eerie-black rounded-lg`}>
                    <div className="flex my-2.5 gap-3">
                        <div>
                            <div
                                className={`bg-white dark:bg-black p-3 rounded-lg w-[50px] h-[50px] flex content-center items-center shadow-lg`}>
                                <IoIosPhonePortrait className={'w-10 h-10 text-cyan-600'}/>
                            </div>
                        </div>
                        <div className={'w-9/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Phone</span>
                            <p className={`font-base text-base dark:text-white`}>+55 84 9 9475 - 3159</p>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <div
                                className={`bg-white dark:bg-black p-3 rounded-lg w-[50px] h-[50px] flex content-center items-center shadow-lg`}>
                                <IoMailOpenSharp className={'w-10 h-10 text-amber-700'}/>
                            </div>
                        </div>
                        <div className={'w-9/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Email</span>
                            <a href="mailto:charllys.lima@outlook.com">
                                <p className={`font-base text-base break-words dark:text-white`}>charllys.lima@outlook.com</p>
                            </a>
                        </div>
                    </div>
                    <hr/>
                    <div className="flex my-2.5 gap-3 w-100">
                        <div>
                            <div
                                className={`bg-white dark:bg-black p-3 rounded-lg w-[50px] h-[50px] flex content-center items-center shadow-lg`}>
                                <FaMapMarkerAlt className={'w-10 h-10 text-emerald-700'}/>
                            </div>
                        </div>
                        <div className={'w-9/12'}>
                            <span className={`text-payne-s-grey dark:text-silver text-xs font-light`}>Location</span>
                            <p className={`text-base break-words dark:text-white`}>Rio Grande do Norte, Brazil</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-center flex flex-col items-center`}>
                <Button color="blue">
                    <HiCloudDownload className="mr-2 h-5 w-5"/>
                    Download CV
                </Button>
            </div>
        </Card>
    </>
}

export default PersonalInfo