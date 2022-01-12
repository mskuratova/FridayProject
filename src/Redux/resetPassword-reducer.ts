import {Dispatch} from "redux";
import {resetPasswordAPI, ResetPasswordValuesType} from "../API/auth-api";

type ActionType = SetSuccessInfoType;
type InitialStateType = {
    info: string,
    error?: string,
}

const initialState = {
    info: '',
    error: 'Something wrong',
};

export const resetPasswordReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET-SUCCESS-INFO':
            return {
                ...state,
                info: action.info,
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

export const resetPasswordTC = (resetPasswordData: ResetPasswordValuesType) => (dispatch: Dispatch) => {
    resetPasswordAPI.resetPassword(resetPasswordData)
        .then(res => {
            if (res.status === 200) {
                console.log(res);
                dispatch(setSuccessInfoAC(res.data.info));
            }
        }).catch(err => {
        console.log(err);
    })
}


