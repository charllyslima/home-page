// reducers/JsonReducer.ts
import {RootObject} from "@/entities/RootObject";

interface JsonState {
    data: RootObject | null;
}

const initialState: JsonState = {
    data: null
};

interface SetJsonAction {
    type: 'SET_JSON';
    payload: RootObject;
}

type JsonActionTypes = SetJsonAction;

const jsonReducer = (state = initialState, action: JsonActionTypes): JsonState => {
    switch (action.type) {
        case 'SET_JSON':
            return {
                ...state,
                data: action.payload
            };
        default:
            return state;
    }
};

export default jsonReducer;
