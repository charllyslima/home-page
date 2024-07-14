import React from 'react';
import {motion} from "framer-motion";
import {calculateYearDifference} from "@/utils/DataFunctions";

interface IProgressBar {
    title: string;
    startDate: Date;
    maxYears: number;
    small?: boolean;
}

const ProgressBar: React.FC<IProgressBar> = ({title, startDate, maxYears = 10, small = false}) => {
    const actualDiff = calculateYearDifference(new Date(startDate), new Date())
    const progressPercentage = Math.min((actualDiff / maxYears) * 100, 100);

    // Gera uma chave baseada nas props para forçar o re-render.
    const key = `${title}-${startDate}-${maxYears}-${small}`;

    return (
        <div key={key} className={`${small ? 'ps-5' : 'ps-0'} mt-1`}>
            <div className={`flex justify-between items-center mb-1`}>
                <h1 className={`${small ? 'text-sm' : 'text-lg'} font-semibold`}>{title}</h1>
                <h2 className={`text-xs`}>{actualDiff} years</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <motion.div
                    initial={{
                        width: 0
                    }}
                    animate={{
                        width: `${progressPercentage}%`,
                    }}
                    className={`flex justify-between items-center px-4 w-0 ${small ? 'h-0.5' : 'h-1'} rounded-full text-white  ${progressPercentage >= 100 ? 'bg-red-500' : 'dark:bg-[#32C2FB] bg-[#258DB7]'}`}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
