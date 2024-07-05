import ProgressBar from "@/components/ProgressBar";
import Transition from "@/components/Transition";

const WebDeveloper = () => {
    return (
        <Transition>
            <>
                <ProgressBar title={`Framework`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`Tailwind`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Bootstrap`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`JavaScript & TypeScript`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`Angular`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`React`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Next.js`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Vue.JS`} currentYear={2} maxYears={10} small={true}/>
            </>
        </Transition>
    )

}

export default WebDeveloper