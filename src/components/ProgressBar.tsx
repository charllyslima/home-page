import React from 'react';
import {motion} from "framer-motion";

interface IProgressBar {
    title: string;
    years: number;
    maxYears: number;
    small?: boolean;
}

const ProgressBar: React.FC<IProgressBar> = ({title, years, maxYears = 10, small = false}) => {
    const progressPercentage = Math.min((years / maxYears) * 100, 100);

    const key = `${title}-${years}-${maxYears}-${small}`;
    let color = 'dark:bg-[#32C2FB] bg-[#258DB7]'
    if (progressPercentage >= 100) {
        color = 'bg-red-500'
    } else if (progressPercentage >= 70) {
        color = 'bg-amber-400'
    }


    return (
        <div key={key} className={`${small ? 'ps-5' : 'ps-0'} mt-1`}>
            <div className={`flex justify-between items-center mb-1 text-gunmetal-500 dark:text-gunmetal-200`}>
                <h1 className={`${small ? 'text-sm' : 'text-lg'} font-semibold`}>{title}</h1>
                <h2 className={`text-xs`}>{years} years</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <motion.div
                    initial={{
                        width: 0
                    }}
                    animate={{
                        width: `${progressPercentage}%`,
                    }}
                    className={`flex justify-between items-center px-4 w-0 ${small ? 'h-1' : 'h-1.5'} rounded-full text-white ${color}`}
                />
            </div>
        </div>
    );
};

export default ProgressBar;
