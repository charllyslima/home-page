import ProgressBar from "@/components/ProgressBar";
import Transition from "@/components/Transition";

const WebDeveloper = () => {
    return (
        <Transition>
            <>
                <ProgressBar title={`PHP`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`laravel`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Zend`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`Yii2`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`C#`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`.Net`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`SQL`} currentYear={2} maxYears={10}/>
                <ProgressBar title={`MySQL`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`SQL Server`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`PostgreSQL`} currentYear={2} maxYears={10} small={true}/>
                <ProgressBar title={`SQLite`} currentYear={2} maxYears={10} small={true}/>
            </>
        </Transition>
    )
}

export default WebDeveloper