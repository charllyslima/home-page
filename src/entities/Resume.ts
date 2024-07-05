export interface Resume {
    education: Education[];
    experience: Experience[];
    knowledge: Knowledge;
}

interface Skill {
    title: string;
    years: number;
    sub_item: SubItem[];
}

interface Knowledge {
    title: string;
    skills: Skill[];
}

export interface SubItem {
    title: string;
    years: number;
}

export interface Education {
    title: string;
    school: string;
    date_ini: string;
    date_fin: string;
}

export interface Experience {
    role: string;
    company: string;
    date_ini: string;
    date_fin: string;
}