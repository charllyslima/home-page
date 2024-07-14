import TitlePage from "@/components/TitlePage";
import {Card} from "flowbite-react";
import {FaUserAlt} from "react-icons/fa";
import Transition from "@/components/Transition";
import {LanguageMap, LanguageMapArray, Languages} from "@/constants/languages";
import useLanguage from "@/hooks/useLanguage";
import IconLoader from "@/components/Icon";

interface Icon {
    name: string
    color: string
}

const About = () => {

    const language = useLanguage();

    const pageTitle: LanguageMap<string> = {
        [Languages.ENGLISH]: 'About Me',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Sobre Mim',
        [Languages.SPANISH]: 'Acerca de Mí',
    };

    const descriptions: LanguageMap<string> = {
        [Languages.ENGLISH]: 'Description in English',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Descrição em Português Brasileiro',
        [Languages.SPANISH]: 'Descripción en Español',
    };

    const whatIDo: LanguageMap<string> = {
        [Languages.ENGLISH]: 'What I Do!',
        [Languages.PORTUGUESE_BRAZILIAN]: 'O que eu faço',
        [Languages.SPANISH]: '¡Lo que hago!',
    };

    const webDevelopmentIcon: Icon = {
        name: 'FaCode',
        color: '#269fff',
    };
    const appDevelopmentIcon: Icon = {
        name: 'MdAddToHomeScreen',
        color: '#dda10c',
    };
    const uiUxIcon: Icon = {
        name: 'HiOutlineColorSwatch',
        color: '#d566ff',
    };
    const managementIcon: Icon = {
        name: 'FaCogs',
        color: '#ff75d8',
    };

    const whatIDoItems: LanguageMapArray<{ title: string, description: string, icon: Icon }> = {
        [Languages.ENGLISH]: [
            {
                title: 'Web Development',
                description: 'Description in English',
                icon: webDevelopmentIcon
            },
            {
                title: 'App Development',
                description: 'Description in English',
                icon: appDevelopmentIcon
            },
            {
                title: 'UI/UX Design',
                description: 'Description in English',
                icon: uiUxIcon
            },
            {
                title: 'Management',
                description: 'Description in English',
                icon: managementIcon
            },
        ],
        [Languages.PORTUGUESE_BRAZILIAN]: [
            {
                title: 'Desenvolvimento web',
                description: 'Descrição em Português Brasileiro',
                icon: webDevelopmentIcon
            },
            {
                title: 'Desenvolvimento de Aplicativos',
                description: 'Descrição em Português Brasileiro',
                icon: appDevelopmentIcon
            },
            {
                title: 'Design UI/UX',
                description: 'Descrição em Português Brasileiro',
                icon: uiUxIcon
            },
            {
                title: 'Gestão',
                description: 'Descrição em Português Brasileiro',
                icon: managementIcon
            },
        ],
        [Languages.SPANISH]: [
            {
                title: 'Desarrollo web',
                description: 'Descripción en Español',
                icon: webDevelopmentIcon
            },
            {
                title: 'Desarrollo de Aplicaciones',
                description: 'Descripción en Español',
                icon: appDevelopmentIcon
            },
            {
                title: 'Diseño UI/UX',
                description: 'Descripción en Español',
                icon: uiUxIcon
            },
            {
                title: 'Gestión',
                description: 'Descripción en Español',
                icon: managementIcon
            },
        ],
    }

    return <Transition>
        <Card className="rounded-3xl p-10 dark:text-white" id={`about`}>
            <TitlePage title={pageTitle[language]} icon={<FaUserAlt className={`me-3 text-4xl text-air-force-blue`}/>}/>
            <p className={`dark:text-silver text-gunmetal-500`}>
                {descriptions[language]}
            </p>
            <h1 className={`text-3xl montserrat-semibold dark:text-white`}>{whatIDo[language]}</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {whatIDoItems[language].map((el, index) => {
                    return (
                        <Card key={index} className="max-w-md p-3 justify-start"
                              style={{backgroundColor: el.icon.color + '12'}} horizontal>
                            <h1 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white flex items-center">
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