import ProgressBar from "@/components/ProgressBar";

const WebDeveloper = () => {
    return
        <>
            <ProgressBar title={`PHP`} currentYear={2} maxYears={10}/>
            <ProgressBar title={`laravel`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`JavaScript & TypeScript`} currentYear={2} maxYears={10}/>
            <ProgressBar title={`Angular`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`React`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`Next.js`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`Vue.JS`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`SQL`} currentYear={2} maxYears={10}/>
            <ProgressBar title={`MySQL`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`SQL Server`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`PostgreSQL`} currentYear={2} maxYears={10} small={true}/>
            <ProgressBar title={`Vue.JS`} currentYear={2} maxYears={10} small={true}/>
        </>

}

export default WebDeveloper