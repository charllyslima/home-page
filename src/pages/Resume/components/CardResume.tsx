import {Card} from "flowbite-react";
import React from "react";
import {FaStar} from "react-icons/fa";
import {Tooltip} from "react-tooltip";

interface ICardResume {
    side: "right" | "left"
    h1: string
    h2: string
    h3: string
    star?: string
}


const CardResume: React.FC<ICardResume> = ({side, h1, h2, h3, star}) => {
    let bg = 'bg-delftBlue-100 dark:bg-gunmetal-500'

    if (side === "right") {
        bg = 'bg-periwinkle-400 dark:bg-gunmetal-600'
    }

    return <Card className={`${bg} p-5 min-h-[140px]`}>
        <div className="">
            <h1 className="font-extralight">{h2}</h1>
            <h2 className="text-xl">
                {h1}
                {star ? <>
                        <FaStar className={`text-amber-500`} data-tooltip-id="my-tooltip" data-tooltip-content={star}/>
                        <Tooltip id="my-tooltip"/>
                    </>
                    :
                    ''}
            </h2>
            <h3 className="font-light">{h3}</h3>
        </div>
    </Card>
}

export default CardResume