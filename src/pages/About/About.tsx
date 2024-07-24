import useLanguage from "@/hooks/useLanguage";
import IconLoader from "@/components/Icon";
import {descriptions, whatIDo, whatIDoItems} from "@/pages/About/content/ContentAbout";
import {motion} from "framer-motion"

const About = () => {

    const language = useLanguage()

    return <section className="px-10 py-3 space-y-7" id={`about`}>
        <p className={`dark:text-silver text-gunmetal-500 dark:text-greyScale-500 flex flex-col gap-4`}
           dangerouslySetInnerHTML={{__html: descriptions[language]}}/>
        <h1 className={`text-3xl montserrat-semibold dark:text-white`}>{whatIDo[language]}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {whatIDoItems[language].map((el, index) => {
                return (
                    <motion.button
                        whileHover={{scale: 0.9}}
                        whileTap={{scale: 0.8}}
                        key={index}
                        className="w-full"
                    >
                        <div
                            className="p-3 justify-start flex flex-col h-full rounded shadow gap-3"
                            style={{backgroundColor: el.icon.color + '12'}}
                        >
                            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
                                <IconLoader color={el.icon.color} iconName={el.icon.name}/>
                                {el.title}
                            </h1>
                            <p className="poppins-regular text-gray-700 dark:text-gray-400 text-start text-base pb-3 flex-grow">
                                {el.description}
                            </p>
                        </div>
                    </motion.button>
                );
            })}
        </div>
    </section>
}

export default About