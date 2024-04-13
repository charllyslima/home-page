import React from 'react';

interface IProgressBar {
    title: string
    currentYear: number
    maxYears: number
    small?: boolean
}

const ProgressBar: React.FC<IProgressBar> = ({title, currentYear, maxYears = 10, small = false}) => {

    const progressPercentage = Math.min((currentYear / maxYears) * 100, 100)

    return (
        <div className={small ? 'ps-5' : 'ps-0'}>
            <div className={`flex justify-between items-center mb-3`}>
                <h1 className={`${small ? 'text-sm' : 'text-lg'} font-semibold`}>{title}</h1>
                <h2 className={`text-xs`}>{currentYear} years</h2>
            </div>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                    className={`flex justify-between items-center px-4 ${small ? 'h-1' : 'h-1.5'} rounded-full text-white  ${progressPercentage >= 100 ? 'bg-red-500' : 'dark:bg-[#32C2FB] bg-[#258DB7]'}`}
                    style={{width: `${progressPercentage}%`}}
                >
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
