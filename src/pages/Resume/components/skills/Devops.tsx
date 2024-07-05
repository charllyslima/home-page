import ProgressBar from "@/components/ProgressBar";
import Transition from "@/components/Transition";

const WebDeveloper = () => {
    return (
        <Transition>
            <>
                <ProgressBar title={`Docker`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`Git`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`GitHub`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Gitlab`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Bitbucket`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`SVN Tortoise`} currentYear={2} maxYears={10} small={true}/>
            </>
        </Transition>
    )
}

export default WebDeveloper