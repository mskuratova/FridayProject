import {combineReducers, createStore, applyMiddleware} from "redux";
import {ProfileReducer} from "./profileReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    ProfileReducer,
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))
export type storeType = ReturnType<typeof rootReducer>