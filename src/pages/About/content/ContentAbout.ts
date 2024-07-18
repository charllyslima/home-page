import {LanguageMap, LanguageMapArray, Languages} from "@/constants/Languages";
import Icon from "@/components/Icon";

interface Icon {
    name: string
    color: string
}

export const descriptions = {
    [Languages.ENGLISH]: '<p>I am a Systems Analyst and Full Stack Developer from Natal, Brazil, specializing in creating innovative solutions using various technologies. I love transforming complex problems into efficient and intuitive solutions.</p>' +
    '<p>My goal is to develop projects that combine functionality and design in a creative and effective way. I have worked on several projects that integrated cutting-edge technologies to deliver exceptional results.</p>',

    [Languages.PORTUGUESE_BRAZILIAN]: '<p>Sou Analista de Sistemas e Desenvolvedor Full Stack, de Natal, Brasil, especializado em criar soluções inovadoras utilizando diversas tecnologias. Adoro transformar problemas complexos em soluções eficientes e intuitivas.</p>' +
    '<p>Meu objetivo é desenvolver projetos que unam funcionalidade e design de maneira criativa e eficaz. Já trabalhei em diversos projetos que integraram tecnologias de ponta para entregar resultados excepcionais.</p>',

    [Languages.SPANISH]: '<p>Soy Analista de Sistemas y Desarrollador Full Stack, de Natal, Brasil, especializado en crear soluciones innovadoras utilizando diversas tecnologías. Me encanta transformar problemas complejos en soluciones eficientes e intuitivas.</p>' +
    '<p>Mi objetivo es desarrollar proyectos que combinen funcionalidad y diseño de manera creativa y eficaz. He trabajado en varios proyectos que integraron tecnologías de vanguardia para ofrecer resultados excepcionales.</p>',
};

export const whatIDo: LanguageMap<string> = {
    [Languages.ENGLISH]: 'What I Do!',
    [Languages.PORTUGUESE_BRAZILIAN]: 'O que eu faço',
    [Languages.SPANISH]: '¡Lo que hago!',
};

const webDevelopmentIcon: Icon = {
    name: 'HiCode',
    color: '#269fff',
};
const appDevelopmentIcon: Icon = {
    name: 'HiOutlineViewGrid',
    color: '#dda10c',
};
const uiUxIcon: Icon = {
    name: 'HiOutlineColorSwatch',
    color: '#d566ff',
};
const managementIcon: Icon = {
    name: 'HiTrendingUp',
    color: '#ff75d8',
};
const scrapingIcon: Icon = {
    name: 'GiRobotGrab',
    color: '#ff6080'
}
const legacyMaintenanceIcon: Icon = {
    name: 'GrTools',
    color: '#8774ff'
}

export const whatIDoItems: LanguageMapArray<{ title: string, description: string, icon: Icon }> = {
    [Languages.ENGLISH]: [
        {
            title: 'Web Development',
            description: 'I develop modern and responsive web solutions, using the latest technologies to create fast, secure, and intuitive websites.',
            icon: webDevelopmentIcon
        },
        {
            title: 'App Development',
            description: 'Specializing in app development, I create innovative mobile solutions that provide a rich and engaging user experience.',
            icon: appDevelopmentIcon
        },
        {
            title: 'UI/UX Design',
            description: 'I design intuitive user interfaces and engaging user experiences, focusing on usability and aesthetics to ensure user satisfaction.',
            icon: uiUxIcon
        },
        {
            title: 'Management',
            description: 'With experience in project management, I coordinate teams and resources to deliver high-quality projects on time.',
            icon: managementIcon
        },
        {
            title: 'Web Scraping Development',
            description: 'I create data scraping robots to automate the collection of data from various websites, ensuring accurate and efficient data gathering.',
            icon: scrapingIcon
        },
        {
            title: 'Legacy Application Maintenance',
            description: 'I provide maintenance for legacy applications, ensuring they remain operational and secure while integrating new functionalities as needed.',
            icon: legacyMaintenanceIcon // make sure to define this icon
        },
    ],
    [Languages.PORTUGUESE_BRAZILIAN]: [
        {
            title: 'Desenvolvimento Web',
            description: 'Desenvolvo soluções web modernas e responsivas, utilizando as tecnologias mais recentes para criar sites rápidos, seguros e intuitivos.',
            icon: webDevelopmentIcon
        },
        {
            title: 'Desenvolvimento de Aplicativos',
            description: 'Especializado em desenvolvimento de aplicativos, crio soluções móveis inovadoras que oferecem uma experiência de usuário rica e envolvente.',
            icon: appDevelopmentIcon
        },
        {
            title: 'Design UI/UX',
            description: 'Projeto interfaces de usuário intuitivas e experiências de usuário atraentes, focando na usabilidade e na estética para garantir a satisfação do usuário.',
            icon: uiUxIcon
        },
        {
            title: 'Gestão',
            description: 'Com experiência em gestão de projetos, coordeno equipes e recursos para entregar projetos de alta qualidade dentro dos prazos estabelecidos.',
            icon: managementIcon
        },
        {
            title: 'Desenvolvimento de Web Scraping',
            description: 'Crio robôs de raspagem de dados para automatizar a coleta de dados de diversos sites, garantindo a obtenção precisa e eficiente de informações.',
            icon: scrapingIcon
        },
        {
            title: 'Manutenção de Aplicações Legadas',
            description: 'Forneço manutenção para aplicações legadas, garantindo que permaneçam operacionais e seguras, enquanto integro novas funcionalidades conforme necessário.',
            icon: legacyMaintenanceIcon // make sure to define this icon
        },
    ],
    [Languages.SPANISH]: [
        {
            title: 'Desarrollo Web',
            description: 'Desarrollo soluciones web modernas y responsivas, utilizando las tecnologías más recientes para crear sitios rápidos, seguros e intuitivos.',
            icon: webDevelopmentIcon
        },
        {
            title: 'Desarrollo de Aplicaciones',
            description: 'Especializado en desarrollo de aplicaciones, creo soluciones móviles innovadoras que ofrecen una experiencia de usuario rica y envolvente.',
            icon: appDevelopmentIcon
        },
        {
            title: 'Diseño UI/UX',
            description: 'Diseño interfaces de usuario intuitivas y experiencias de usuario atractivas, enfocándome en la usabilidad y la estética para garantizar la satisfacción del usuario.',
            icon: uiUxIcon
        },
        {
            title: 'Gestión',
            description: 'Con experiencia en gestión de proyectos, coordino equipos y recursos para entregar proyectos de alta calidad dentro de los plazos establecidos.',
            icon: managementIcon
        },
        {
            title: 'Desarrollo de Web Scraping',
            description: 'Creo robots de raspado de datos para automatizar la recopilación de datos de varios sitios web, asegurando la obtención precisa y eficiente de información.',
            icon: scrapingIcon
        },
        {
            title: 'Mantenimiento de Aplicaciones Legadas',
            description: 'Proporciono mantenimiento para aplicaciones legadas, asegurando que permanezcan operativas y seguras, mientras integro nuevas funcionalidades según sea necesario.',
            icon: legacyMaintenanceIcon // make sure to define this icon
        },
    ],
};