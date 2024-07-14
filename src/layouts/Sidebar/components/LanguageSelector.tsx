import {setLanguage} from "@/reducers/LanguageSlice";
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '@/store';
import {LanguageFlags, Languages} from "@/constants/languages";

interface LanguageButtonProps {
    className?: string
}

const LanguageSelector = ({className}: LanguageButtonProps) => {

    const language = useSelector((state: RootState) => state.language.language);
    const dispatch: AppDispatch = useDispatch();

    const languageCycle: Languages[] = Object.values(Languages) as Languages[];

    const changeLanguage = () => {
        const currentIndex = languageCycle.indexOf(language);
        const nextIndex = (currentIndex + 1) % languageCycle.length;
        const nextLanguage = languageCycle[nextIndex];
        dispatch(setLanguage(nextLanguage));
    };


    return <>
        <div className={`${className} flex items-center justify-center cursor-pointer`}
             onClick={() => changeLanguage()}>
            <img src={LanguageFlags[language]} alt="" className={`h-[40px] w-[25px]`}
                 aria-label={`brazilian language`}/>
        </div>
    </>
}

export default LanguageSelector