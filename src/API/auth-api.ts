import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    // baseURL: 'http://localhost:7542/2.0/',
});

type ResetPasswordValuesType = {
    email: string
    from: string
    message: string
};

export const authAPI = {
    resetPassword: (resetPasswordValues: ResetPasswordValuesType) => {
        return instance.post(`auth/forgot`, resetPasswordValues)
    }
}