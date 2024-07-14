import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const useLanguage = () => {
    return useSelector((state: RootState) => state.language.language);
};

export default useLanguage;
