import {Languages} from "@/constants/Languages";

export enum ListRoutes {
    BASE_NAME = '/home-page/',
    DEFAULT = '/',
    ABOUT = '/about',
    RESUME = '/resume',
    WORKS = '/works',
    BLOG = '/blog',
    CONTACT = '/contact'
}

export const aboutLang: { [key in Languages]: string } = {
    [Languages.ENGLISH]: 'About',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Sobre',
    [Languages.SPANISH]: 'Acerca',
};

export const resumeLang: { [key in Languages]: string } = {
    [Languages.ENGLISH]: 'Resume',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Currículo',
    [Languages.SPANISH]: 'Currículum',
};

export const worksLang: { [key in Languages]: string } = {
    [Languages.ENGLISH]: 'Works',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Portfólio',
    [Languages.SPANISH]: 'Trabajos',
};

export const blogLang: { [key in Languages]: string } = {
    [Languages.ENGLISH]: 'Blog',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Blog',
    [Languages.SPANISH]: 'Blog',
};

export const contactLang: { [key in Languages]: string } = {
    [Languages.ENGLISH]: 'Contact',
    [Languages.PORTUGUESE_BRAZILIAN]: 'Contato',
    [Languages.SPANISH]: 'Contacto',
};