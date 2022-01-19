import {Dispatch} from "redux";
import {loginAPI, loginDataType} from "../API/API";


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
    isLoggedIn?: boolean
}

const initialState: profileType = {
    _id: '',
    email: '',
    name: '',
    publicCardPacksCount: 0,
    created: new Date(),
    updated: new Date(),
    isAdmin: false,
    verified: false,
    rememberMe: false,
    isLoggedIn: false
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
    action для активации крутилки и отключения кнопки
}*/

export const loginSuccessAC = (user: profileType): profileActionType => {
    return {type: 'LOGIN_SUCCESS', user}
}

export const loginErrorAC = (errorMessage: string): profileActionType => {
    return {type: 'LOGIN_ERROR', errorMessage}
}

export const loginThunk = (loginData: loginDataType) => (dispatch: Dispatch) => {
    loginAPI.login(loginData)
        .then(response => {
            console.log(response)
            return response.data
        })

        .catch((error) => {
            alert(error.response.data.error)
            dispatch(loginErrorAC(error.response.data.error))
            return Promise.reject()
        })

        .then((response: profileType) => dispatch(loginSuccessAC(response)))
}
