import axios from "axios";
import {FormikSetNewPasswordValuesType} from "../Components/NewPassword/NewPasswordContainer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
});

export type ResetPasswordValuesType = {
    email: string
    from: string
    message: string
};

const authAPI = {}

export const resetPasswordAPI = {
    resetPassword: (resetPasswordValues: ResetPasswordValuesType) => {
        return instance.post(`auth/forgot`, resetPasswordValues)
    },
    setNewPassword: (values: FormikSetNewPasswordValuesType) => {
        return instance.post('/auth/set-new-password', values)
    }

}