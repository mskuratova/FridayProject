import {applyMiddleware, combineReducers, createStore} from "redux";
import {RegisterReducer} from "./registerReducer";
import thunk from "redux-thunk";
import {resetPasswordReducer} from "./resetPassword-reducer";
import {ProfileReducer} from "./profileReducer";


const rootReducer = combineReducers({
    RegisterReducer,
    resetPasswordReducer,
    ProfileReducer,
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
export type storeType = ReturnType<typeof rootReducer>