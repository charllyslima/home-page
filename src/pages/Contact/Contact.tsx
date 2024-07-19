import {FaEnvelopeOpenText, FaPhoneVolume} from "react-icons/fa6";
import useLanguage from "@/hooks/useLanguage";
import {messageContact} from "@/pages/Contact/content/ContactContent";

const Contact = () => {
    const language = useLanguage()

    return (
        <div className={`p-10 space-y-5`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex items-center gap-6 p-10 rounded-xl bg-periwinkle-200 dark:bg-[#7157ff33]">
                    <FaPhoneVolume className="w-[45px] h-[45px] text-periwinkle-900"/>
                    <div className="space-y-2">
                        <h1 className="text-xl font-semibold dark:text-white">Phone:</h1>
                        <a href="tel:+5584994753159" className="text-lg dark:text-greyScale-500">+55 84 9
                            9475 -
                            3159</a>
                    </div>
                </div>
                <div className="flex items-center gap-6 p-10 rounded-xl bg-aqua-100 dark:bg-[#00BFC533]">
                    <FaEnvelopeOpenText className="w-[45px] h-[45px] text-aqua-900 "/>
                    <div className="space-y-2">
                        <h1 className="text-xl font-semibold dark:text-white">Email:</h1>
                        <a href="mailto:charllys.lima@outlook.com"
                           className="text-gray-lite text-lg dark:text-[#A6A6A6] break-all">charllys.lima@outlook.com</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 p-10 rounded-xl bg-ghostWhite-500 dark:bg-[#FAFAFF33]">
                <p className={`text-3xl text-gunmetal-400 montserrat-regular`}>{messageContact[language].h1}</p>
                <p className={`text-3xl text-gunmetal-400 montserrat-regular`}>{messageContact[language].h2}</p>
                <p className={`text-3xl montserrat-bold`}>{messageContact[language].h3}</p>
            </div>
        </div>
    );
}

export default Contact