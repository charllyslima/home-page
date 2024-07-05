// reducers/index.ts
import { combineReducers } from '@reduxjs/toolkit';
import jsonReducer from './JsonReducer';

const rootReducer = combineReducers({
    json: jsonReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
