import {PersonalInformation, About, Resume} from "@/entities";

export interface RootObject {
    pt: Data;
}

interface Data {
    personal_information: PersonalInformation;
    about: About;
    resume: Resume;
}
