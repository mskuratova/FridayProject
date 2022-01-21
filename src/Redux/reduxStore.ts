import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./testReduxer";
import {RegisterReducer} from "./registerReducer";
import thunk from "redux-thunk";
import {resetPasswordReducer} from "./resetPassword-reducer";
import {ProfileReducer} from "./profileReducer";
import {searchReducer} from "./searchReducer";


const rootReducer = combineReducers({
    testReducer,
    RegisterReducer,
    resetPasswordReducer,
    ProfileReducer,
    searchReducer
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
export type storeType = ReturnType<typeof rootReducer>