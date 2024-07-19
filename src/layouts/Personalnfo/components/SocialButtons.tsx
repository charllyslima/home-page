import {FaGithub, FaLinkedinIn, FaMedium, FaWhatsapp} from "react-icons/fa";

const SocialButtons = () => {
    return <ul className={`flex gap-4 items-center`}>
        <li>
            <a href="https://www.linkedin.com/in/charllyslima/" aria-label="My linkedin" target={`_blank`}
               className="shadow-lg bg-anti-flash-white text-[#144679] h-10 w-10 flex justify-center items-center rounded-lg
               hover:bg-delftBlue-200 dark:hover:bg-delftBlue-200
               hover:text-anti-flash-white dark:bg-gunmetal-800  duration-300 transition">
                <FaLinkedinIn/>
            </a>
        </li>
        <li>
            <a href="https://github.com/charllyslima" aria-label="My github" target={`_blank`}
               className="shadow-lg bg-anti-flash-white text-black h-10 w-10 flex justify-center items-center rounded-lg
               hover:bg-delftBlue-200 dark:hover:bg-delftBlue-200 hover:dark:text-black dark:text-silver
               hover:text-anti-flash-white dark:bg-gunmetal-800  duration-300 transition">
                <FaGithub/>
            </a>
        </li>
        <li>
            <a href="https://medium.com/@charllys.lima" aria-label="My github" target={`_blank`}
               className="shadow-lg bg-anti-flash-white text-black h-10 w-10 flex justify-center items-center rounded-lg
               hover:bg-delftBlue-200 dark:hover:bg-delftBlue-200 hover:dark:text-black dark:text-silver
               hover:text-anti-flash-white dark:bg-gunmetal-800  duration-300 transition">
                <FaMedium/>
            </a>
        </li>
        <li>
            <a href="https://api.whatsapp.com/send?phone=5584994753159&text=Ol%C3%A1!%20Eu%20gostaria%20de%20obter%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20trabalho." aria-label="My github" target={`_blank`}
               className="shadow-lg bg-anti-flash-white text-lime-500 h-10 w-10 flex justify-center items-center rounded-lg
               hover:bg-delftBlue-200 dark:hover:bg-delftBlue-200 hover:dark:text-black dark:text-silver
               hover:text-anti-flash-white dark:bg-gunmetal-800  duration-300 transition">
                <FaWhatsapp/>
            </a>
        </li>
    </ul>
}

export default SocialButtons