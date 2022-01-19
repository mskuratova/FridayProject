import {Dispatch} from "redux";
import {registerAPI, registerDataType} from "../API/API";

type registerType = {
    _id: string,
    email: string,
    error?: string,
    isRegistration: boolean,
}

const initialState: registerType = {
    _id: '',
    email: '',
    isRegistration: false,
}

type REGISTER_SUCCESS = {
    type: 'REGISTER_SUCCESS'
    user: registerType
}
type REGISTER_ERROR = {
    type: 'REGISTER_ERROR',
    errorMessage: string
}

type profileActionType = REGISTER_SUCCESS | REGISTER_ERROR;
export const RegisterReducer = (state: registerType = initialState, action: profileActionType): registerType => {
    switch (action.type) {

        case "REGISTER_SUCCESS":
            return {...action.user, isRegistration: true}

        case "REGISTER_ERROR":
            return {...state, error: action.errorMessage}

        default:
            return state
    }
}

export const registerSuccessAC = (user: registerType): profileActionType => {
    return {type: 'REGISTER_SUCCESS', user}
}

export const registerErrorAC = (errorMessage: string): profileActionType => {
    return {type: 'REGISTER_ERROR', errorMessage}
}

export const registerThunk = (registerData: registerDataType) => (dispatch: Dispatch) => {
    registerAPI.register(registerData)

        .then(response => {
            console.log(response)
            return response.data
        })

        .catch((error) => {
            alert(error.response.data.error)
            dispatch(registerErrorAC(error.response.data.error))
            return Promise.reject()
        })

        .then((response: registerType) => dispatch(registerSuccessAC(response)))
}