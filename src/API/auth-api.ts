import axios from "axios";
import {FormikSetNewPasswordValuesType} from "../Components/NewPassword/NewPasswordContainer";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
});

export type ResetPasswordValuesType = {
    email: string
    from: string
    message: string
};

export const authAPI = {
    authMe: () => {
        return instance.post('auth/me')
    },

    login: (email: string, password: string, rememberMe: boolean) => {
        return instance.post('auth/login', {email, password, rememberMe})
    }
};

export const resetPasswordAPI = {
    resetPassword: (resetPasswordValues: ResetPasswordValuesType) => {
        return instance.post(`auth/forgot`, resetPasswordValues)
    },
    setNewPassword: (values: FormikSetNewPasswordValuesType) => {
        return instance.post('/auth/set-new-password', values)
    }

}