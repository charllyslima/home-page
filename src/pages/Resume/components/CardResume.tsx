import {Card} from "flowbite-react";
import React from "react";

interface ICardResume {
    side: "right" | "left"
    h1: string
    h2: string
    h3: string
}


const CardResume: React.FC<ICardResume> = ({side, h1, h2, h3}) => {
    let bg = 'bg-delftBlue-100 dark:bg-gunmetal-500'

    if (side === "right") {
        bg = 'bg-periwinkle-400 dark:bg-gunmetal-600'
    }

    return <Card className={`${bg} p-5 min-h-[140px]`}>
        <div className="">
            <h1 className="font-extralight">{h2}</h1>
            <h2 className="text-xl">{h1}</h2>
            <h3 className="font-light">{h3}</h3>
        </div>
    </Card>
}

export default CardResume