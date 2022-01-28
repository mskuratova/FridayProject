import {applyMiddleware, combineReducers, createStore} from "redux";
import {RegisterReducer} from "./registerReducer";
import thunk from "redux-thunk";
import {resetPasswordReducer} from "./resetPassword-reducer";
import {ProfileReducer} from "./profileReducer";
import {tableReducer} from "./table-reducer";
import {searchReducer} from "./searchReducer";


const rootReducer = combineReducers({
    RegisterReducer,
    resetPasswordReducer,
    ProfileReducer,
    tableReducer,
    searchReducer
});
export type storeType = ReturnType<typeof rootReducer>
export const reduxStore = createStore(rootReducer, applyMiddleware(thunk))