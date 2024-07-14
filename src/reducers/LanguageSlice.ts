import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Languages} from "@/constants/languages";

interface LanguageState {
    language: Languages;
}

const initialState: LanguageState = {
    language: Languages.ENGLISH,
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<Languages>) => {
            state.language = action.payload;
        },
    },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
