export interface PersonalInformation {
    birthday: string;
    name: string;
    role: string;
    social: Social;
    phone_number: string;
    email: string;
    location: string;
    link_cv: string;
}

export interface Social {
    linkedin: string;
    github: string;
    medium: string;
}