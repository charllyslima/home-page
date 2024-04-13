import {FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";

const SocialButtons = () => {
    return <ul className={`flex gap-4 items-center`}>
        <li>
            <a href="https://www.linkedin.com/in/charllyslima/" aria-label="My linkedin" target={`_blank`}
               className="shadow-lg bg-anti-flash-white text-[#144679] h-10 w-10 flex justify-center items-center rounded-lg
               dark:bg-eerie-black dark:hover:bg-midnight-green
               hover:text-anti-flash-white hover:bg-midnight-green">
                <FaLinkedinIn/>
            </a>
        </li>
        <li>
            <a href="https://github.com/charllyslima" aria-label="My github" target={`_blank`}
               className="shadow-lg bg-anti-flash-white text-black h-10 w-10 flex justify-center items-center rounded-lg
               dark:bg-eerie-black dark:hover:bg-midnight-green
               hover:text-anti-flash-white hover:bg-midnight-green">
                <FaGithub/>
            </a>
        </li>
    </ul>
}

export default SocialButtons