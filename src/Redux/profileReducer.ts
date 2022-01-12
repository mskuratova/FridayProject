import {Dispatch} from "redux";
import {loginAPI} from "../API/login-api";
import {log} from "util";
import {AxiosResponse} from "axios";

type profileType = {
    _id: string,
    email: string,
    name: string,
    avatar?: string,
    publicCardPacksCount: number,
    created: Date,
    updated: Date,
    isAdmin: boolean,
    verified: boolean,
    rememberMe: boolean,
    error?: string,
    isLoggedIn?: boolean,
}

const initialState: profileType = {
    _id: '',
    email: '',
    name: '',
    publicCardPacksCount: 0,
    created: new Date('December 17, 1995 03:24:00'),
    updated: new Date('December 17, 1995 03:24:00'),
    isAdmin: false,
    verified: false,
    rememberMe: false,
    isLoggedIn: false,
}

type LOGIN_USER = {
    type: 'LOGIN_USER'
}
type LOGIN_SUCCESS = {
    type: 'LOGIN_SUCCESS'
    user: profileType
}
type LOGIN_ERROR = {
    type: 'LOGIN_ERROR',
    errorMessage: string
}

type profileActionType = LOGIN_USER | LOGIN_SUCCESS | LOGIN_ERROR;
export const ProfileReducer = (state: profileType = initialState, action: profileActionType): profileType => {
    switch (action.type) {
        // case "LOGIN_USER":return {...state,isLoggedIn:true} //для отображения крутилки и отключения кнопки

        case "LOGIN_SUCCESS":
            return {...action.user, isLoggedIn: true}

        case "LOGIN_ERROR":
            return {...state, error: action.errorMessage}
        default:
            return state
    }
}
/*export const loginUserAC = ():profileActionType=>{
    return {type:'LOGIN_USER'}
}*/
export const loginSuccessAC = (user: profileType): profileActionType => {
    return {type: 'LOGIN_SUCCESS', user}
}
export const loginErrorAC = (errorMessage: string): profileActionType => {
    return {type: 'LOGIN_ERROR', errorMessage}
}
export const loginThunk = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    loginAPI.login(email, password, rememberMe)
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch((e) => {
            alert(e.response.data.error)
            dispatch(loginErrorAC(e.response.data.error))
            return Promise.reject()
        })
        .then((response: profileType) => dispatch(loginSuccessAC(response)))
}
