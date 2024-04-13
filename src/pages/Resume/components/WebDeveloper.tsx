import ProgressBar from "@/components/ProgressBar";

const WebDeveloper = () => {

    const max = 10
    return <div>
        <ProgressBar title={`PHP`} currentYear={9} maxYears={max}/>
        <ProgressBar title={`laravel`} currentYear={2} maxYears={max} small={true}/>
        <ProgressBar title={`Yii2`} currentYear={4} maxYears={max} small={true}/>
        <ProgressBar title={`Pure PHP`} currentYear={9} maxYears={max} small={true}/>
        <hr className={`my-5`}/>
        <ProgressBar title={`JavaScript & TypeScript`} currentYear={9} maxYears={max}/>
        <ProgressBar title={`Angular`} currentYear={4} maxYears={max} small={true}/>
        <ProgressBar title={`React`} currentYear={2} maxYears={max} small={true}/>
        <ProgressBar title={`Next.js`} currentYear={2} maxYears={max} small={true}/>
        <ProgressBar title={`Vue.JS`} currentYear={2} maxYears={max} small={true}/>
        <ProgressBar title={`jQuery `} currentYear={9} maxYears={max} small={true}/>
        <ProgressBar title={`Pure JavaScript`} currentYear={9} maxYears={max} small={true}/>
        <hr className={`my-5`}/>
        <ProgressBar title={`SQL`} currentYear={9} maxYears={max}/>
        <ProgressBar title={`MySQL`} currentYear={9} maxYears={max} small={true}/>
        <ProgressBar title={`SQL Server`} currentYear={4} maxYears={max} small={true}/>
        <ProgressBar title={`PostgreSQL`} currentYear={2} maxYears={max} small={true}/>
        <ProgressBar title={`SQLite`} currentYear={4} maxYears={max} small={true}/>
    </div>

}

export default WebDeveloper