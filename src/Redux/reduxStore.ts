import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./testReduxer";
import {resetPasswordReducer} from "./resetPassword-reducer";
import thunk from "redux-thunk";
import {tableReducer} from "./table-reducer";


const rootReducer = combineReducers({
    testReducer,
    resetPasswordReducer,
    tableReducer
});
export type storeType = ReturnType<typeof rootReducer>
export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))