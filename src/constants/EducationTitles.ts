import {LanguageMap, Languages} from "@/constants/Languages";

export const educationTitles: { [key: string]: LanguageMap<string> } = {
    postgradItGovernance: {
        [Languages.ENGLISH]: 'Postgrad. degree, IT Governance',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Pós-graduação, Governança de TI',
        [Languages.SPANISH]: 'Posgrado, Gobernanza de TI',
    },
    postgradBigData: {
        [Languages.ENGLISH]: 'Postgrad. degree, Big Data',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Pós-graduação, Big Data',
        [Languages.SPANISH]: 'Posgrado, Big Data',
    },
    postgradSIProjects: {
        [Languages.ENGLISH]: 'Postgrad. degree, SI Projects',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Pós-graduação, Projetos de SI',
        [Languages.SPANISH]: 'Posgrado, Proyectos de SI',
    },
    bachelorsInfoSystems: {
        [Languages.ENGLISH]: 'Bachelor\'s degree, Info. Systems',
        [Languages.PORTUGUESE_BRAZILIAN]: 'Bacharelado, Sistemas de Informação',
        [Languages.SPANISH]: 'Licenciatura, Sistemas de Información',
    },
};


export const commonEducationData = {
    postgradItGovernance: {
        school: 'GRAN',
        date_ini: '2023',
        date_fin: '2024',
    },
    postgradBigData: {
        school: 'Descomplica Faculdade Digital',
        date_ini: '2021',
        date_fin: '2022',
    },
    postgradSIProjects: {
        school: 'Descomplica Faculdade Digital',
        date_ini: '2021',
        date_fin: '2022',
    },
    bachelorsInfoSystems: {
        school: 'Universidade Potiguar',
        date_ini: '2017',
        date_fin: '2020',
    },
};
