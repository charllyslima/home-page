import React from 'react';
import ProgressBar from "@/components/ProgressBar";
import {Skill} from "@/entities";


interface KnowledgeContentProps {
    skills: Skill[];
}

const KnowledgeContent: React.FC<KnowledgeContentProps> = ({skills}) => {

    return (
        <div>
            {skills.map((el, i) => (
                <div key={i}>
                    <ProgressBar title={el.title} startDate={el.startDate} maxYears={10} />
                    {el.sub_item.map((subItem, j) => (
                        <ProgressBar title={subItem.title} startDate={subItem.startDate} maxYears={10} small={true} key={j} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default KnowledgeContent;
