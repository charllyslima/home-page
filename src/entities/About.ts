export interface About {
    title: string;
    description: string;
    what_i_do: WhatIDo[];
}

interface WhatIDo {
    title: string;
    icon: Icon;
    description: string;
}

interface Icon {
    name: string
    color: string
}