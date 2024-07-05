import {Card} from "flowbite-react";
import React from "react";

interface ICardResume {
    side: "right" | "left"
    h1: string
    h2: string
    h3: string
}


const CardResume: React.FC<ICardResume> = ({side, h1, h2, h3}) => {
    let bg = 'bg-silver dark:bg-gunmetal'

    if (side === "right") {
        bg = ''
    }

    return <Card className={`${bg} p-5 min-h-[140px]`}>
        <div className="">
            <h1 className="font-bold">{h1}</h1>
            <h2 className="font-light">{h2}</h2>
            <h3 className="font-extralight">{h3}</h3>
        </div>
    </Card>
}

export default CardResume