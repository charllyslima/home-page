// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import languageSlice from "@/reducers/LanguageSlice";

const rootReducer = combineReducers({
    language: languageSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
