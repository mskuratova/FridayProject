import {applyMiddleware, combineReducers, createStore} from "redux";
import {testReducer} from "./testReduxer";
import {RegisterReducer} from "./registerReducer";
import thunk from "redux-thunk";
import {resetPasswordReducer} from "./resetPassword-reducer";
import {ProfileReducer} from "./profileReducer";
import {tableReducer} from "./table-reducer";
import {searchReducer} from "./searchReducer";


const rootReducer = combineReducers({
    testReducer,
    RegisterReducer,
    resetPasswordReducer,
    ProfileReducer,
    tableReducer,
    searchReducer
});

export type storeType = ReturnType<typeof rootReducer>
export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
