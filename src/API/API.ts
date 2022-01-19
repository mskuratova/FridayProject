import axios from "axios";

const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: 'http://localhost:7542/2.0/'
})

export type  loginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}

export type resetPasswordDataType = {
    email: string,
    from: string,
    message: string
}

export type registerDataType = {
    email: string,
    password: string
}

export const loginAPI = {
    login: (loginData: loginDataType) => instance.post(`auth/login`, loginData)
}

export const registerAPI = {
    register: (registerData: registerDataType) => instance.post(`auth/register`, registerData)
}

export const resetPasswordAPI = {
    resetPassword: (resetPasswordValues: resetPasswordDataType) => {
        return instance.post(`auth/forgot`, resetPasswordValues)
    }
}