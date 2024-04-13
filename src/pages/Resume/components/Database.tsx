import ProgressBar from "@/components/ProgressBar";

const WebDeveloper = () => {
    const max = 10
    return <div>
        <ProgressBar title={`SQL`} currentYear={9} maxYears={max}/>
        <ProgressBar title={`MySQL`} currentYear={9} maxYears={max} small={true}/>
        <ProgressBar title={`SQL Server`} currentYear={4} maxYears={max} small={true}/>
        <ProgressBar title={`PostgreSQL`} currentYear={2} maxYears={max} small={true}/>
        <ProgressBar title={`SQLite`} currentYear={4} maxYears={max} small={true}/>
    </div>

}

export default WebDeveloper