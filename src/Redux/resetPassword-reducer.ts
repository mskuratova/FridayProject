import {Dispatch} from "redux";
import {resetPasswordAPI, resetPasswordDataType} from "../API/API";

type ActionType = SetSuccessInfoType;

type InitialStateType = {
    info: string,
    error?: string
}

export type SetSuccessInfoType = ReturnType<typeof setSuccessInfoAC>;

const initialState = {
    info: '',
    error: '',
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

export const setSuccessInfoAC = (info: string) => {
    return {
        type: 'SET-SUCCESS-INFO',
        info,
    } as const
}

export const resetPasswordTC = (resetPasswordData: resetPasswordDataType) => (dispatch: Dispatch) => {
    resetPasswordAPI.resetPassword(resetPasswordData)
        .then(response => {
            if (response.status === 200) {
                console.log(response);
                dispatch(setSuccessInfoAC(response.data.info));
            }
        }).catch(error => {
        console.log(error);
    })
}



