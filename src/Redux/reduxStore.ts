import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./testReduxer";
import {RegisterReducer} from "./registerReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    testReducer,
    RegisterReducer
});

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
export type storeType = ReturnType<typeof rootReducer>