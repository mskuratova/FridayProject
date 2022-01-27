import {Dispatch} from "redux";
import {resetPasswordAPI, ResetPasswordValuesType} from "../API/auth-api";
import {FormikSetNewPasswordValuesType} from "../Components/NewPassword/NewPasswordContainer";

type ActionType = SetSuccessInfoType
    | setErrorACType
    | setEmailACType
    | setIsSentACType
    | IsPasswordChangedACType;

type InitialStateType = {
    info: string,
    error?: string,
    loading: boolean
    isSent: boolean
    email: string
    isPasswordChanged: boolean
}

const initialState = {
    info: '',
    error: 'Something wrong',
    loading: false,
    isSent: false,
    email: 'example@mail.ru',
    isPasswordChanged: false,
};

export const resetPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-SUCCESS-INFO':
            return {
                ...state,
                info: action.info,
            }
        case "SET-IS-LOADING-PASSWORD":
            return {
                ...state,
                loading: action.loading,
            }
        case "SET-EMAIL":
            return {
                ...state,
                email: action.email,
            }
        case 'SET-IS-SENT':
            return {
                ...state,
                isSent: action.isSent
            }
        case "IS-PASSWORD-CHANGED":
            return {
                ...state,
                isPasswordChanged: action.isPasswordChanged
            }
        default:
            return state
    }
}

export type SetSuccessInfoType = ReturnType<typeof setSuccessInfoAC>;

export const setSuccessInfoAC = (info: string) => {
    return {
        type: 'SET-SUCCESS-INFO',
        info,
    } as const
}

export type setErrorACType = ReturnType<typeof setIsLoadingAC>;

export const setIsLoadingAC = (loading: boolean) => {
    return {
        type: 'SET-IS-LOADING-PASSWORD',
        loading,
    } as const
}

export type setEmailACType = ReturnType<typeof setEmailAC>;

export const setEmailAC = (email: string) => {
    return {
        type: 'SET-EMAIL',
        email,
    } as const
}

export type setIsSentACType = ReturnType<typeof setIsSentAC>;

export const setIsSentAC = (isSent: boolean) => {
    return {
        type: 'SET-IS-SENT',
        isSent,
    } as const
}

export type IsPasswordChangedACType = ReturnType<typeof isPasswordChangedAC>;

export const isPasswordChangedAC = (isPasswordChanged: boolean) => {
    return {
        type: 'IS-PASSWORD-CHANGED',
        isPasswordChanged,
    } as const
}

export const resetPasswordTC = (resetPasswordData: ResetPasswordValuesType) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));
    resetPasswordAPI.resetPassword(resetPasswordData)
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch(setSuccessInfoAC(res.data.info));
                dispatch(setIsSentAC(true))
            }
        }).catch(err => {
        console.log(err.error);
        dispatch(setSuccessInfoAC('something wrong'))
    })
        .finally(() => {
            dispatch(setIsLoadingAC(false))
            setTimeout(() => {
                dispatch(setSuccessInfoAC(''))
            }, 5000)
        })
}

export const setNewPasswordTC = (values: FormikSetNewPasswordValuesType) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true));
    resetPasswordAPI.setNewPassword(values)
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch(isPasswordChangedAC(true))
            }
        }).catch(err => {
        console.log(err);
    }).finally(() => {
        dispatch(setIsLoadingAC(false));
    })
}



