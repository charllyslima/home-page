import React from "react";

interface IContentItemProps {
    title: string
    value: string
    link?: string
}

const ContentItem: React.FC<IContentItemProps> = ({title, value, link}) => {
    return (
        <div className={'w-10/12'}>
            <span className={`text-payne-s-grey dark:text-greyScale-500 text-xs font-light`}>
                {title}
            </span>
            {link ? (
                <a href={link} className={`hover:text-periwinkle-1000 duration-300 transition`}>
                    <p className="font-base text-base dark:text-white break-all poppins-semibold">{value}</p>
                </a>
            ) : (
                <p className="font-base text-base dark:text-white break-all poppins-semibold">{value}</p>
            )}
        </div>
    )
}

export default ContentItem