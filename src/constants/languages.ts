import ptBrImage from "@img/flag-brazil.svg";
import esImage from "@img/flag-spain.svg";
import enImage from "@img/flag-united-states.svg";

export enum Languages {
    ENGLISH = 'en',
    SPANISH = 'es',
    PORTUGUESE_BRAZILIAN = 'pt-br',
}

export const LanguageFlags: { [key in Languages]: string } = {
    [Languages.ENGLISH]: enImage,
    [Languages.SPANISH]: esImage,
    [Languages.PORTUGUESE_BRAZILIAN]: ptBrImage,
};

export type LanguageMap<T> = {
    [key in Languages]: T;
};

export type LanguageMapArray<T> = {
    [key in Languages]: T[];
};