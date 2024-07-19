import {LanguageMap, Languages} from "@/constants/Languages";

export const role: LanguageMap<string> = {
    [Languages.ENGLISH]: 'Systems Analyst',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Analista de Sistemas',
    [Languages.SPANISH]: 'Analista de Sistemas',
};

export const birthday: LanguageMap<{ title: string, value: string }> = {
    [Languages.ENGLISH]: {
        title: 'Birthday',
        value: 'September 8, 1995'
    },
    [Languages.PORTUGUESE_BRAZILIAN]: {
        title: 'Aniversário',
        value: '08 September 1995'
    },
    [Languages.SPANISH]: {
        title: 'Cumpleaños',
        value: '08 Septiembre 1995'
    },
};

export const locationTitle: LanguageMap<string> = {
    [Languages.ENGLISH]: 'Location',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Localidade',
    [Languages.SPANISH]: 'Ubicación',
};

export const phoneTitle: LanguageMap<string> = {
    [Languages.ENGLISH]: 'Phone',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Telefone',
    [Languages.SPANISH]: 'Teléfono',
}
export const mailTitle: LanguageMap<string> = {
    [Languages.ENGLISH]: 'E-mail',
    [Languages.PORTUGUESE_BRAZILIAN]: 'E-mail',
    [Languages.SPANISH]: 'Correo electrónico',
}

export const cvLink: LanguageMap<string> = {
    [Languages.ENGLISH]: 'CV_EN.pdf',
    [Languages.PORTUGUESE_BRAZILIAN]: 'CV_PT_BR.pdf',
    [Languages.SPANISH]: 'CV_ES.pdf',
}