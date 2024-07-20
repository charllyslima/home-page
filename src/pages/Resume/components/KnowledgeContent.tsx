import React from 'react';
import ProgressBar from "@/components/ProgressBar";
import {comboSkill, Technologies} from "@/constants/Skills";


interface KnowledgeContentProps {
    knowledgeSkill: number;
}

interface Skills {
    title: string
    years: number
    sub_item: {
        title: string
        years: number
    }[]
}

const KnowledgeContent: React.FC<KnowledgeContentProps> = ({knowledgeSkill}) => {

    const skills: Skills[][] = [
        [
            comboSkill[Technologies.PHP],
            comboSkill[Technologies.JS_TS],
            comboSkill[Technologies.DATABASE],
        ],
        [
            comboSkill[Technologies.JAVA],
            comboSkill[Technologies.FLUTTER],
            comboSkill[Technologies.NATIVESCRIPT],
        ],
        [
            comboSkill[Technologies.PYTHON],
        ],
        [
            comboSkill[Technologies.GIT],
            comboSkill[Technologies.CI_CD],
            comboSkill[Technologies.DOCKER],
        ],
        [
            comboSkill[Technologies.JS_TS],
            comboSkill[Technologies.CSS],
            comboSkill[Technologies.BUILD_TOOLS],
        ],
        [
            comboSkill[Technologies.PHP],
            comboSkill[Technologies.CSHARP],
            comboSkill[Technologies.DATABASE],
        ],
        [
            comboSkill[Technologies.DATABASE],
        ],
    ]


    return (
        <div>
            {skills[knowledgeSkill].map((el, i) => (
                <div key={i} className={`mb-5`}>
                    <ProgressBar title={el.title} years={el.years} maxYears={10}/>
                    {el.sub_item.map((subItem, j) => (
                        <ProgressBar title={subItem.title} years={subItem.years} maxYears={10} small={true}
                                     key={j}/>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KnowledgeContent;
