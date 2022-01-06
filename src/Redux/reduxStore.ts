import {combineReducers, createStore} from "redux";
import {testReducer} from "./testReduxer";


const rootReducer = combineReducers({
    testReducer,
});

export const reduxStore = createStore(rootReducer)