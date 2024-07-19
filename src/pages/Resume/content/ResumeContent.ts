import {LanguageMap, LanguageMapArray, Languages} from "@/constants/Languages";
import {commonEducationData, educationTitles} from "@/constants/EducationTitles";
import {commonExperienceData, experienceTitles} from "@/constants/ExperienceTitles";

export const titleEducation: LanguageMap<string> = {
    [Languages.ENGLISH]: 'Education',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Educação',
    [Languages.SPANISH]: 'Educación',
};

export const titleExperience: LanguageMap<string> = {
    [Languages.ENGLISH]: 'Experience',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Experiência',
    [Languages.SPANISH]: 'Experiencia',
};

export const education: LanguageMapArray<{
    title: string;
    school: string;
    date_ini: string;
    date_fin: string,
    star?: string
}> = {
    [Languages.ENGLISH]: [
        {
            title: educationTitles.postgradItGovernance[Languages.ENGLISH],
            ...commonEducationData.postgradItGovernance,
        },
        {
            title: educationTitles.postgradBigData[Languages.ENGLISH],
            ...commonEducationData.postgradBigData,
        },
        {
            title: educationTitles.postgradSIProjects[Languages.ENGLISH],
            ...commonEducationData.postgradSIProjects,
        },
        {
            title: educationTitles.bachelorsInfoSystems[Languages.ENGLISH],
            star: 'Honors award for being the student with the highest grades.',
            ...commonEducationData.bachelorsInfoSystems,
        },
    ],
    [Languages.PORTUGUESE_BRAZILIAN]: [
        {
            title: educationTitles.postgradItGovernance[Languages.PORTUGUESE_BRAZILIAN],
            ...commonEducationData.postgradItGovernance,
        },
        {
            title: educationTitles.postgradBigData[Languages.PORTUGUESE_BRAZILIAN],
            ...commonEducationData.postgradBigData,
        },
        {
            title: educationTitles.postgradSIProjects[Languages.PORTUGUESE_BRAZILIAN],
            ...commonEducationData.postgradSIProjects,
        },
        {
            title: educationTitles.bachelorsInfoSystems[Languages.PORTUGUESE_BRAZILIAN],
            star: 'Prêmio de láurea por ser o aluno com as melhores notas.',
            ...commonEducationData.bachelorsInfoSystems,
        },
    ],
    [Languages.SPANISH]: [
        {
            title: educationTitles.postgradItGovernance[Languages.SPANISH],
            ...commonEducationData.postgradItGovernance,
        },
        {
            title: educationTitles.postgradBigData[Languages.SPANISH],
            ...commonEducationData.postgradBigData,
        },
        {
            title: educationTitles.postgradSIProjects[Languages.SPANISH],
            ...commonEducationData.postgradSIProjects,
        },
        {
            title: educationTitles.bachelorsInfoSystems[Languages.SPANISH],
            star: 'Premio de laurea por ser el alumno con las mejores notas.',
            ...commonEducationData.bachelorsInfoSystems,
        },
    ],
};

export const experience: LanguageMapArray<{ role: string; company: string; date_ini: string; date_fin: string }> = {
    [Languages.ENGLISH]: [
        {
            role: experienceTitles.gran[Languages.ENGLISH],
            ...commonExperienceData.gran,
        },
        {
            role: experienceTitles.brq[Languages.ENGLISH],
            ...commonExperienceData.brq,
        },
        {
            role: experienceTitles.wipro[Languages.ENGLISH],
            ...commonExperienceData.wipro,
        },
        {
            role: experienceTitles.inovall[Languages.ENGLISH],
            ...commonExperienceData.inovall,
        },
    ],
    [Languages.PORTUGUESE_BRAZILIAN]: [
        {
            role: experienceTitles.gran[Languages.PORTUGUESE_BRAZILIAN],
            ...commonExperienceData.gran,
        },
        {
            role: experienceTitles.brq[Languages.PORTUGUESE_BRAZILIAN],
            ...commonExperienceData.brq,
        },
        {
            role: experienceTitles.wipro[Languages.PORTUGUESE_BRAZILIAN],
            ...commonExperienceData.wipro,
        },
        {
            role: experienceTitles.inovall[Languages.PORTUGUESE_BRAZILIAN],
            ...commonExperienceData.inovall,
        },
    ],
    [Languages.SPANISH]: [
        {
            role: experienceTitles.gran[Languages.SPANISH],
            ...commonExperienceData.gran,
        },
        {
            role: experienceTitles.brq[Languages.SPANISH],
            ...commonExperienceData.brq,
        },
        {
            role: experienceTitles.wipro[Languages.SPANISH],
            ...commonExperienceData.wipro,
        },
        {
            role: experienceTitles.inovall[Languages.SPANISH],
            ...commonExperienceData.inovall,
        },
    ],
};

export const knowledge: LanguageMapArray<{ key: number, title: string }> = {
    [Languages.ENGLISH]: [
        {
            key: 0,
            title: 'Web Development',
        },
        {
            key: 1,
            title: 'Mobile Development',
        },
        {
            key: 2,
            title: 'Web Scraping',
        },
        {
            key: 3,
            title: 'Devops',
        },
        {
            key: 4,
            title: 'FrontEnd',
        },
        {
            key: 5,
            title: 'BackEnd',
        },
        {
            key: 6,
            title: 'Database',
        },
    ],
    [Languages.PORTUGUESE_BRAZILIAN]: [
        {
            key: 0,
            title: 'Desenvolvimento Web',
        },
        {
            key: 1,
            title: 'Desenvolvimento Mobile',
        },
        {
            key: 2,
            title: 'Web Scraping',
        },
        {
            key: 3,
            title: 'Devops',
        },
        {
            key: 4,
            title: 'FrontEnd',
        },
        {
            key: 5,
            title: 'BackEnd',
        },
        {
            key: 6,
            title: 'Banco de Dados',
        },
    ],
    [Languages.SPANISH]: [
        {
            key: 0,
            title: 'Desarrollo Web',
        },
        {
            key: 1,
            title: 'Desarrollo Móvil',
        },
        {
            key: 2,
            title: 'Web Scraping',
        },
        {
            key: 3,
            title: 'Devops',
        },
        {
            key: 4,
            title: 'FrontEnd',
        },
        {
            key: 5,
            title: 'BackEnd',
        },
        {
            key: 6,
            title: 'Base de Datos',
        },
    ],
}